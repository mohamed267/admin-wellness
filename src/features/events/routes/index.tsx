import CustomLayouts from 'layouts/CustomLayout/CustomLayouts';
import { Route, Routes } from 'react-router-dom';
import ListEvents from '../pages/ListEvents';
import NewEvent from '../pages/NewEvent';
import EditEvent from '../pages/EditEvent';
import NewCategory from '../pages/categories/NewCategory';
import NewTown from '../pages/towns/NewTown';
import ListCoupons from '../pages/coupons/ListCoupons';
import NewCoupon from '../pages/coupons/NewCoupon';
import ListCategories from '../pages/categories/ListCategories';
import ListTowns from '../pages/towns/ListTowns';
import EditCategory from '../pages/categories/EditCategory';
import EditTown from '../pages/towns/EditTown';

//components

export const EventsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomLayouts />}>
        <Route path="new" element={<NewEvent />} />
        <Route path="category">
          <Route path="" element={<ListCategories />} />
          <Route path="new" element={<NewCategory />} />
          <Route path=":categoryId" element={<EditCategory />} />
        </Route>
        <Route path="city">
          <Route path=":townId" element={<EditTown />} />
          <Route path="" element={<ListTowns />} />
          <Route path="new" element={<NewTown />} />
        </Route>
        <Route path=":eventId">
          <Route path="coupons">
            <Route path="" element={<ListCoupons />} />
            <Route path="new" element={<NewCoupon />} />
          </Route>
          <Route path="" element={<EditEvent />} />
        </Route>

        <Route path="" element={<ListEvents />} />
      </Route>
    </Routes>
  );
};
