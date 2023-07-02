// import { useAuth } from "lib/auth2";
import { useRoutes } from "react-router-dom";
import { commonRoutes } from "./common";
import { protectedRoutes } from "./protected";
import { authRoutes } from "./auth";



export const AppRoutes = ()=>{
    
    const routes = [...protectedRoutes  , ...authRoutes]
    

  
    const element = useRoutes(routes);





    return(
        <>{element}</>
    )


}