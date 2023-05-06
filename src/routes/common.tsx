
import { Outlet } from "react-router-dom";



const App = () => {


    return (
        <Outlet />
    );
  };



export const commonRoutes = [{
    path :  "/auth" , 
    element : <App /> , 
    children : []
}]