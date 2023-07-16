import { ClientsRoutes } from 'features/clients/routes';
import { DashboardRoutes } from 'features/dashboard/routes';
import { EventsRoutes } from 'features/events/routes';
import { OrganizersRoutes } from 'features/organizer/routes';
// import { PartnersRoutes } from 'features/partners/routes';
import { UsersRoutes } from 'features/users/routes';
import { SellersRoutes } from 'features/seller/routes';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from 'lib/auth';
import { Suspense, useEffect } from 'react';
import { Center, Spinner } from '@chakra-ui/react';

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
    <Suspense
      fallback={
        <Center w="100vx" h="100vh">
          <Spinner />
        </Center>
      }
    >
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
    ],
  },
];
