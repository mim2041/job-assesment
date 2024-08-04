import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import SignUp from "../pages/Login/SignUp";
import Login from "../pages/Login/Login";
import NotFound from "../pages/Dashboard/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        // 404 page
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    // 404 page
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
