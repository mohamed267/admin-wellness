import CustomLayouts from "layouts/CustomLayout/CustomLayouts"
import { Route, Routes } from "react-router-dom"
import ListEvents from "../pages/ListEvents"
import NewEvent from "../pages/NewEvent"
import NewCategory from "../pages/NewCategory"
import NewTown from "../pages/NewTown"
import ListCoupons from "../pages/coupons/ListCoupons"
import NewCoupon from "../pages/coupons/NewCoupon"


//components 

export const EventsRoutes = ()=>{
    return(
        <Routes>
            <Route  path="/" element={
                <CustomLayouts />} 
                
            >
                <Route  path="new" element={<NewEvent />} />
                <Route  path="category/new"  element={<NewCategory />}  />
                <Route  path="city/new"  element={<NewTown />}  />
                <Route path=":eventId/coupons/" >  
                    <Route path=""   element={<ListCoupons />  }  />
                    <Route path="new"   element={<NewCoupon />  }  />
                </Route>

                <Route  path="" element={<ListEvents />} />
                
            </Route> 
        </Routes>
    )
}