import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Authenticaion/Login";
import SignUp from "../pages/Authenticaion/SignUp";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    }
])

export default router;