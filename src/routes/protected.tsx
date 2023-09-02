import { ClientsRoutes } from 'features/clients/routes';
import { DashboardRoutes } from 'features/dashboard/routes';
import { EventsRoutes } from 'features/events/routes';
import { OrganizersRoutes } from 'features/organizer/routes';
// import { PartnersRoutes } from 'features/partners/routes';
import { UsersRoutes } from 'features/users/routes';
import { SellersRoutes } from 'features/seller/routes';

const { SettingsRoutes } = lazyImport(
  () => import('features/settings'),
  'SettingsRoutes',
);

const { BlogsRoutes } = lazyImport(
  () => import('features/blogs'),
  'BlogsRoutes',
);

const { ServicesRoutes } = lazyImport(
  () => import('features/services'),
  'ServicesRoutes',
);

import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from 'lib/auth';
import { Suspense, useEffect } from 'react';
import { lazyImport } from 'utils/lazyImport';
import Loader from 'components/loader/Loader';
import { GuidesRoutes } from 'features/guide/routes';

const App = () => {
  const navigate = useNavigate();
  const { data: user, isFetched: isUserFetched } = useUser();
  const location = useLocation();

  useEffect(() => {
    if (isUserFetched) {
      if (!user) {
        navigate('/auth/admin/login', { state: { from: location?.pathname } });
      } else {
        if (!location.pathname || location.pathname === '/') {
          navigate('/dashboard');
        }
      }
    }
  }, [user, navigate, location, isUserFetched]);

  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/users/*',
        element: <UsersRoutes />,
      },
      {
        path: '/users/clients/*',
        element: <ClientsRoutes />,
      },
      {
        path: '/users/partners/organizers/*',
        element: <OrganizersRoutes />,
      },
      {
        path: '/users/partners/sellers/*',
        element: <SellersRoutes />,
      },
      // {
      //     path : "/users/partners/*",
      //     element: <PartnersRoutes />
      // },
      {
        path: '/events/*',
        element: <EventsRoutes />,
      },
      {
        path: '/dashboard/*',
        element: <DashboardRoutes />,
      },
      {
        path: '/settings/*',
        element: <SettingsRoutes />,
      },
      {
        path: '/blog/*',
        element: <BlogsRoutes />,
      },
      {
        path: '/guides/*',
        element: <GuidesRoutes />,
      },
      {
        path: '/services/*',
        element: <ServicesRoutes />,
      },
    ],
  },
];
