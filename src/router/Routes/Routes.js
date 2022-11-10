import { createBrowserRouter } from "react-router-dom";
import Login from "../../Authentication/Login/Login";
import Registration from "../../Authentication/Registration/Registration";
import Mains from "../../Layout/Mains";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home/Home";
import AddService from "../../pages/Home/Services/AddService";
import AllServices from "../../pages/Home/Services/AllServices";
import ServiceDetail from "../../pages/Home/Services/ServiceDetail";
import Services from "../../pages/Home/Services/Services";
import AllReviews from "../../pages/Reviews/AllReviews";
import Form from "../../pages/Reviews/Form";
import MyReviews from "../../pages/Reviews/MyReviews";
import PrivateRoute from "./PrivateRoute";

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
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }

        ]
    }
]);

export default router;
