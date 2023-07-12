import CustomLayouts from 'layouts/CustomLayout/CustomLayouts';
import { Route, Routes } from 'react-router-dom';
import ListEvents from '../pages/ListUsers';

//components

export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomLayouts />}>
        <Route path="" element={<ListEvents />} />
      </Route>
    </Routes>
  );
};
