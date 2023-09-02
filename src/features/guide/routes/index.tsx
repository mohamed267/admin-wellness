import { Route, Routes } from 'react-router-dom';
import NewGuide from '../pages/NewGuide';
import CustomLayouts from 'layouts/CustomLayout/CustomLayouts';
import ListGuides from '../pages/ListGuides';
import EditGuide from '../pages/EditGuide';
import ListGuideCategories from '../pages/categories/ListCategories';
import EditGuideCategory from '../pages/categories/EditGuideCategories';
import NewGuideCategory from '../pages/categories/NewGuideCategory';
import ListTowns from '../pages/towns/ListTowns';
import EditTown from '../pages/towns/EditTown';
//components

export const GuidesRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<CustomLayouts />}>
        <Route path="" element={<ListGuides />} />
        <Route path="new" element={<NewGuide />} />
        <Route path=":guideId" element={<EditGuide />} />
        <Route path="categories">
          <Route path="" element={<ListGuideCategories />} />
          <Route path="new" element={<NewGuideCategory />} />
          <Route path=":guideCategoryId" element={<EditGuideCategory />} />
        </Route>
        <Route path="towns">
          <Route path="" element={<ListTowns />} />
          {/* {/* <Route path="new" element={<NewGuideCategory />} /> */}
          <Route path=":townId" element={<EditTown />} />
        </Route>
      </Route>
    </Routes>
  );
};
