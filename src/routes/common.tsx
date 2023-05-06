
import { Outlet, useLocation, useNavigate } from "react-router-dom";



const App = () => {
    const navigate   = useNavigate()
    const {pathname} = useLocation()


    return (
        <Outlet />
    );
  };



export const commonRoutes = [{
    path :  "/auth" , 
    element : <App /> , 
    children : []
}]