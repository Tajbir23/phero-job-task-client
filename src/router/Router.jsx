import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Authenticaion/Login";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    }
])

export default router;