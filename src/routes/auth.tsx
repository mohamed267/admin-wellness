
import AdminLogin from "features/authAdmin/pages/AdminLogin";
import { AuthAdminRoutes } from "features/authAdmin/routes";
import { useUser } from "lib/auth";
import { useEffect } from "react";
import { FaRegComment } from "react-icons/fa";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";



const App = () => {
    const navigate  =  useNavigate() 
    const { data: user, isFetched: isUserFetched } =  useUser()
    const location = useLocation()

    useEffect(()=>{
        if(isUserFetched){
            if(user){
                let {  from  , ...state} =  location?.state ?? {}
                if(from){
                    
                    navigate(from , {state})
                }else{
                    navigate("/dashboard" , {state})
                }

            }

            
        }
        



    }  ,[user, navigate, location , isUserFetched])


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