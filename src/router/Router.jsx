import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Authenticaion/Login";
import SignUp from "../pages/Authenticaion/SignUp";
import Home from "../layout/Home";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/",
        element: <Home />
    }
])

export default router;