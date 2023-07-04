
import { ClientsRoutes } from "features/clients/routes";
import { DashboardRoutes } from "features/dashboard/routes";
import { EventsRoutes } from "features/events/routes";
import { OrganizersRoutes } from "features/organizer/routes";
import { PartnersRoutes } from "features/partners/routes";
import { UsersRoutes } from "features/users/routes";
import { SellersRoutes } from "features/seller/routes"

import { Outlet } from "react-router-dom";



const App = () => {
    

    return (
        <Outlet />
    );
  };



export const protectedRoutes = [{
    path :  "/" , 
    element : <App /> , 
    children : [
        {
            path : "/users/*",
            element: <UsersRoutes />
        }, 
        {
            path : "/users/clients/*",
            element: <ClientsRoutes />
        }, 
        {
            path : "/users/partners/organizers/*",
            element: <OrganizersRoutes />
        }, 
        {
            path : "/users/partners/sellers/*",
            element: <SellersRoutes />
        }, 
        // {
        //     path : "/users/partners/*",
        //     element: <PartnersRoutes />
        // }, 
        {
            path : "/events/*",
            element: <EventsRoutes />
        }, 
        {
            path : "/dashboard/*",
            element: <DashboardRoutes />
        }, 
    ]
}]