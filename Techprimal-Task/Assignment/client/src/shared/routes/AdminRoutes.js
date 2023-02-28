import { lazy } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PlusIcon from "@mui/icons-material/PlusOne";
import AddEditProject from "../../features/admin/Project/AddEditProject";

const Dashboard = lazy(() =>
  import("../../features/admin/dashboard/Dashboard")
);

const Project = lazy(() => import("../../features/admin/Project/Project"));

export default [
  {
    label: "Dashboard",
    path: "",
    showInMenu: true,
    component: <Dashboard />,
    icon: <DashboardIcon />,
    roles: ["student"],
    hasSubRoutes: true,
  },
  {
    label: "Project",
    path: "projects",
    showInMenu: true,
    roles: ["student"],
    icon: <DashboardIcon />,
    component: <Project />,
    hasSubRoutes: true,
  },
  {
    label: "AddProjects",
    path: "Addproject",
    showInMenu: true,
    roles: ["student"],
    icon: <DashboardIcon />,
    component: <AddEditProject />,
    hasSubRoutes: true,
  },
];
