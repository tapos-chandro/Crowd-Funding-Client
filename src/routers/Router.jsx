import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../layout/Home/Home";
import Register from "../layout/Register/Register";
import Login from "../layout/Login/Login";
import AddCampaign from "../layout/AddCampaign/AddCampaign";
import PrivetRouter from "./PrivetRouter";
import MyCampaigns from "../layout/MyCampaign/MyCampaigns";
import MyDonations from "../layout/MyDonations/MyDonations";
import AllCampaigns from "../layout/AllCampaigns/AllCampaigns";
import UpdateCampaign from "../layout/UpdateCampaign/UpdateCampaign";


export  const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'add-campaign',
                element:<PrivetRouter><AddCampaign></AddCampaign></PrivetRouter>
            }
            ,
            {
                path:'my-campaigns',
                element:<PrivetRouter><MyCampaigns></MyCampaigns></PrivetRouter>
            }
            ,
            {
                path:'my-donations',
                element:<PrivetRouter><MyDonations></MyDonations></PrivetRouter>
            }
            ,
            {
                path:'updateCampaign/:id',
                element:<PrivetRouter><UpdateCampaign></UpdateCampaign></PrivetRouter>
            }
        ]
    }
])
