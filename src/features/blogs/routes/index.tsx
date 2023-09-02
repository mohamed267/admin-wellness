import CustomLayouts from 'layouts/CustomLayout/CustomLayouts';
import { Route, Routes } from 'react-router-dom';
import BlogsPage from '../pages/BlogsPage';
import AddBlog from '../pages/NewBlog';

//components

export const BlogsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<CustomLayouts />}>
        <Route path="" element={<BlogsPage />} />
        <Route path="new" element={<AddBlog />} />
      </Route>
    </Routes>
  );
};
