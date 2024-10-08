import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Authenticaion/Login";
import SignUp from "../pages/Authenticaion/SignUp";
import Home from "../layout/Home";
import Dashboard from "../layout/Dashboard";
import AdminRoute from "./AdminRoute";
import Land from "../pages/Land";
import Contact from "../pages/Contact";

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
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Land />
            },
            {
                path: "dashboard",
                element: <AdminRoute><Dashboard /></AdminRoute>
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
])

export default router;