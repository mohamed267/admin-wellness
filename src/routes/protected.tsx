
import { DashboardRoutes } from "features/dashboard/routes";
import { EventsRoutes } from "features/events/routes";
import { UsersRoutes } from "features/users/routes";
import { Outlet, useLocation, useNavigate } from "react-router-dom";



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
            path : "/events/*",
            element: <EventsRoutes />
        }, 
        {
            path : "/dashboard/*",
            element: <DashboardRoutes />
        }, 
    ]
}]