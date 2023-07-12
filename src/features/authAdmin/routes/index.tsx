import { Route, Routes } from 'react-router-dom';
import AdminLogin from '../pages/AdminLogin';

//components

export const AuthAdminRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
    </Routes>
  );
};
