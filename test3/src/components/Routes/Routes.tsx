import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import Error from '../../pages/Error';
import Add from '../../pages/Add';
import Edit from '../../pages/Edit';
import Delete from '../../pages/Delete';
import EventPage from '../../pages/EventPage';

const Routes: React.FC = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/add',
        element: <Add />,
      },
      {
        path: '/edit',
        element: <Edit />,
      },
      {
        path: '/edit/:id',
        element: <EventPage/>
      },
      {
        path: '/delete',
        element: <Delete />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ]
  );

  return <RouterProvider router={router} />;
};

export default Routes;
