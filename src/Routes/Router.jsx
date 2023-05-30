import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../shared/ErrorPage/ErrorPage';
import HomeComponents from '../pages/Home/HomeComponents/HomeComponents';
import MenuComponents from '../pages/Menu/MenuComponents/MenuComponents';
import OrderComponents from '../pages/Orders/OrderComponents/OrderComponents';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeComponents />,
      },
      {
        path: '/menus',
        element: <MenuComponents />,
      },
      {
        path: '/orders/:category',
        element: <OrderComponents />,
      },
    ],
  },
]);

export default router;
