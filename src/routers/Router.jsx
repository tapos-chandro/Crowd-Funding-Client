import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../layout/Home/Home";


export  const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
