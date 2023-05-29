import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../shared/ErrorPage/ErrorPage';
import HomeComponents from '../pages/Home/HomeComponents/HomeComponents';

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
    ],
  },
]);

export default router;
