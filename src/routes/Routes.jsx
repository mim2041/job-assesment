import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../Login/SignUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    }
]);

export default router;