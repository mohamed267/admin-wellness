
import AdminLogin from "features/authAdmin/pages/AdminLogin";
import { AuthAdminRoutes } from "features/authAdmin/routes";
import { useUser } from "lib/auth";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";



const App = () => {
    const navigate  =  useNavigate() 
    const { data: user } =  useUser()
    const location = useLocation()

    useEffect(()=>{

        if(user){
            navigate("/dashboard")
        }


    }  ,[user, navigate])


    return (
        <Outlet />
    );
  };



export const authRoutes = [{
    path :  "/auth" , 
    element : <App /> , 
    children : [
        {
            path : "admin/*",
            element: <AuthAdminRoutes />
        }, 
    ]
}]