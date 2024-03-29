export const navigations = [
  {
    name: "ផ្ទាំព័ត៍មាន",
    path: "/dashboard/analytics",
    icon: "dashboard"
  },

  {
    name: "របាយការណ៍",
    icon: "description",
    children: [
      {
        name: "មូលដ្ឋាន",
        path: "/forms/basic",
        iconText: "B"
      },
      {
        name: "Editor",
        path: "/forms/editor",
        iconText: "E"
      },
      {
        name: "Test",
        path: "/forms/test",
        iconText: "E"
      }

    ]
  },

  {
    name: "សេចក្តីប្រកាស",
    icon: "control_camera",
    path: "/others/drag-and-drop"
  },

    {
    name: "សេចក្តីប្រកាស",
    icon: "control_camera",
    path: "/others/drag-and-drop"
  },
  {
    name: "សេចក្តីប្រកាស",
    icon: "control_camera",
    path: "/others/drag-and-drop"
  },



  {
    name: "ជម្រើស",
    icon: "control_camera",
    path: "/others/drag-and-drop"
  },
  
  {
    name: "Sessions",
    icon: "trending_up",
    children: [
      {
        name: "Sign in",
        iconText: "SI",
        path: "/session/signin"
      },
      {
        name: "Sign up",
        iconText: "SU",
        path: "/session/signup"
      },
      {
        name: "Forgot password",
        iconText: "FP",
        path: "/session/forgot-password"
      },
      {
        name: "Error",
        iconText: "404",
        path: "/session/404"
      }
    ]
  },

];
