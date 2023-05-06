
import { DashboardRoutes } from "features/dashboard/routes";
import { EventsRoutes } from "features/events/routes";
import { UsersRoutes } from "features/users/routes";
import { Navigate, Outlet, useLocation, useNavigate, useRoutes } from "react-router-dom";



const App = () => {
    const navigate   = useNavigate()
    const {pathname} = useLocation()


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