import React, { Component } from "react";
import { Breadcrumb } from "matx";

class BasicForm extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Forms", path: "/forms" },
              { name: "Basic" }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default BasicForm;
