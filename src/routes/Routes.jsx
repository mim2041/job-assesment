import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../Login/SignUp";
import Login from "../Login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default router;