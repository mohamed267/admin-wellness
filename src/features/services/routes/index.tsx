import { Route, Routes } from 'react-router-dom';
import CustomLayouts from 'layouts/CustomLayout/CustomLayouts';
import ListBlogs from '../pages/ListGuides';
//components

export const ServicesRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<CustomLayouts />}>
        <Route path="" element={<ListBlogs />} />
      </Route>
    </Routes>
  );
};
