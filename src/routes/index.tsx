// import { useAuth } from "lib/auth2";
import { useEffect } from "react";
import { useRoutes } from "react-router-dom"
import { commonRoutes } from "./common";
import { protectedRoutes } from "./protected";



export const AppRoutes = ()=>{
    
    const routes = [...protectedRoutes , ...commonRoutes]
    

  
    const element = useRoutes(routes);





    return(
        <>{element}</>
    )


}