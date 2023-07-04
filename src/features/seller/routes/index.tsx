import ListPartners from "features/partners/pages/ListPartners"
import CustomLayouts from "layouts/CustomLayout/CustomLayouts"
import { Route, Routes } from "react-router-dom"


//components 

export const SellersRoutes = ()=>{
    return(
        <Routes>
            <Route  path="/" element={
                <CustomLayouts />} 
                
            >
                <Route  path="" element={<ListPartners type="seller"  />} />
            </Route>
        </Routes>
    )
}