import axios from "axios";
import localStorageService from "./localStorageService";

const API_URL = "http://localhost:8000/api/";

class JwtAuthService {

  // Dummy user object just for the demo
  user = {
    // email: '',
    // password: '',
    // email_verified_at: '',
  }
 

  // You need to send http request with email and passsword to your server in this method
  // Your server will return user object & a Token
  // User should have role property
  // You can define roles in app/auth/authRoles.js

  loginWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.user);
      }, 1000);
      
      return axios
        .post(API_URL + "auth/login", { email, password })
         .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
        
      });

    }).then(data => {
      // Login successful
      // Save token
      this.setSession(data.token);
      // Set user
      this.setUser(data);
      return data;
    });
  };


  

  // You need to send http requst with existing token to your server to check token is valid
  // This method is being used when user logged in & app is reloaded
  loginWithToken = async () => {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.user);
      }, 100);
    });
    // Token is valid
    this.setSession(data.token);
    this.setUser(data);
    return data;
  };

  logout = () => {
    this.setSession(null);
    this.removeUser();
  }

  // Set token to all http request header, so you don't need to attach everytime
  setSession = token => {
    if (token) {
      localStorage.setItem("jwt_token", token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      localStorage.removeItem("jwt_token");
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  // Save user to localstorage
  setUser = (user) => {    
    localStorageService.setItem("auth/login", user);
  }
  // Remove user from localstorage
  removeUser = () => {
    localStorage.removeItem("auth_user");
  }
}

export default new JwtAuthService();
