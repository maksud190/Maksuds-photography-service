import { createBrowserRouter } from "react-router-dom";
import Login from "../../Authentication/Login/Login";
import Registration from "../../Authentication/Registration/Registration";
import Mains from "../../Layout/Mains";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Mains></Mains>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },

        ]
    }
]);

export default router;
