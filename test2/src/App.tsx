import React from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';
import ServiceList from './ServiceList';



const Routes: React.FC = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <ServiceList />,
      },
      {
        path: '/:id/details',
        element: <ServiceDetails />,
      },

    ]
  );

  return <RouterProvider router={router} />;
};

export default Routes;
