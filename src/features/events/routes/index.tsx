import CustomLayouts from "layouts/CustomLayout/CustomLayouts"
import { Route, Routes } from "react-router-dom"
import ListEvents from "../pages/ListEvents"
import NewEvent from "../pages/NewEvent"


//components 

export const EventsRoutes = ()=>{
    return(
        <Routes>
            <Route  path="/" element={
                <CustomLayouts />} 
                
            >
                <Route  path="new" element={<NewEvent />} />
                <Route  path="" element={<ListEvents />} />
            </Route> 
        </Routes>
    )
}