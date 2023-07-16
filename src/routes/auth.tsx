import { Center, Spinner } from '@chakra-ui/react';
import { useUser } from 'lib/auth';
import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { lazyImport } from 'utils/lazyImport';

const { AuthAdminRoutes } = lazyImport(
  () => import('features/authAdmin/routes'),
  'AuthAdminRoutes',
);

const App = () => {
  const navigate = useNavigate();
  const { data: user, isFetched: isUserFetched } = useUser();
  const location = useLocation();

  useEffect(() => {
    if (isUserFetched) {
      if (user) {
        const { from, ...state } = location?.state ?? {};
        if (from) {
          navigate(from, { state });
        } else {
          navigate('/dashboard', { state });
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

export const authRoutes = [
  {
    path: '/auth',
    element: <App />,
    children: [
      {
        path: 'admin/*',
        element: <AuthAdminRoutes />,
      },
    ],
  },
];
