import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/signIn";
import Layout2 from "../Components/Layout2"
import HomeScreen from "../Pages/HomeScreen";
import Register from "../Pages/Register";
import Plans from "../Pages/Plans";
import Layout from "../Components/Layout";

export const mainRouter =createBrowserRouter([
    {
        path: "/",
        element: <Layout2/>,
        children: [
            {
                index: true,
                element: <Plans/>
            },
            {
                index: true,
                path: "/dark",
                element: <HomeScreen/>
            },
        ],
    },
    {
        path: "/signIn",
        element: <SignIn />,
    },
    {
        path: "/Register",
        element: <Register />,
    },
    {
        path: "/HomeScreen",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            },
            // {
            //     index: true,
            //     path: "/dark",
            //     element: <HomeScreen/>
            // },
        ],
    },
]);