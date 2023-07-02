import CustomLayouts from "layouts/CustomLayout/CustomLayouts"
import { Route, Routes } from "react-router-dom"
import ListClients from "../pages/ListClients"


//components 

export const ClientsRoutes = ()=>{
    return(
        <Routes>
            <Route  path="/" element={
                <CustomLayouts />} 
                
            >
                <Route  path="" element={<ListClients />} />
            </Route>
        </Routes>
    )
}