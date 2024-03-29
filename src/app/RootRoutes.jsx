import React from "react";
import { Redirect } from "react-router-dom";
import dashboardRoutes from "./main/admin/dashboard/DashboardRoutes";
import sessionRoutes from "./main/admin/sessions/SessionRoutes";
import formsRoutes from "./main/admin/forms/FormsRoutes";



const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard/analytics/sub-department" />,
    component: () => <Redirect to="/dashboard/analytics/admin" />,
    component: () => <Redirect to="/dashboard/analytics" />,


  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionRoutes,
  ...dashboardRoutes,
  ...formsRoutes,
  ...redirectRoute,
  ...errorRoute
];

export default routes;
