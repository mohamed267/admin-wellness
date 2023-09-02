import CustomLayouts from 'layouts/CustomLayout/CustomLayouts';
import { Route, Routes } from 'react-router-dom';
// import { lazyImport } from 'utils/lazyImport';
import { SettingsPage } from '../pages';
import AddPlanPage from '../pages/AddPlanPage';
import EditPlanPage from '../pages/EditPlanPage';
// import { SettingsPage } from '..';

export const SettingsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<CustomLayouts />}>
        <Route path="" element={<SettingsPage />} />
        <Route path="plans">
          <Route path="new" element={<AddPlanPage />} />
          <Route path=":planId" element={<EditPlanPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
