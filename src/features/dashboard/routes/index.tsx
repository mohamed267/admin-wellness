import CustomLayouts from "layouts/CustomLayout/CustomLayouts"
import { Route, Routes } from "react-router-dom"


//components 
import Home from "../pages/Home"

export const DashboardRoutes = ()=>{
    return(
        <Routes>
            <Route  path="/" element={
                <CustomLayouts />}      
            >
                <Route  path="" element={<Home />} />
            </Route>
        </Routes>
    )
}