import React from "react";
import { authRoles } from "../../../auth/authRoles";

const dashboardRoutes = [
  {
    path: "/dashboard/analytics/portal",
    component: React.lazy(() => import("./Analytics")),
    auth: authRoles.admin
  }
];

export default dashboardRoutes;
