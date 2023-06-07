import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../shared/ErrorPage/ErrorPage';
import HomeComponents from '../pages/Home/HomeComponents/HomeComponents';
import MenuComponents from '../pages/Menu/MenuComponents/MenuComponents';
import OrderComponents from '../pages/Orders/OrderComponents/OrderComponents';
import SignIn from '../pages/SingIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from '../Routes/PrivateRoute/PrivateRoute';
import DashboardLayout from '../Layouts/DashboardLayout';
import MyCart from '../pages/DashBoard/MyCart/MyCart';
import AllUsers from '../pages/DashBoard/AllUsers/AllUsers';
import AddItem from '../pages/DashBoard/AddItem/AddItem';
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
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/dashboard',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'my-cart',
        element: <MyCart />,
      },
      {
        path: 'all-users',
        element: <AllUsers />,
      },
      {
        path: 'add-item',
        element: <AddItem />,
      },
    ],
  },
]);

export default router;
