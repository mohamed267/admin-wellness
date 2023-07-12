import CustomLayouts from 'layouts/CustomLayout/CustomLayouts';
import { Route, Routes } from 'react-router-dom';
import ListPartners from '../pages/ListPartners';

//components

export const PartnersRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomLayouts />}>
        <Route path="" element={<ListPartners />} />
      </Route>
    </Routes>
  );
};
