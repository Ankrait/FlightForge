import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import TicketDetail from '../pages/TicketDetail';
import Airlines from '../pages/Airlines';
import Main from '../pages/Main';

import { getNavigationValue } from '@brojs/cli';

export const router = createBrowserRouter([
  {
    path: getNavigationValue('sber.main'),
    element: <DefaultLayout />,
    children: [
      {
        path: getNavigationValue('sber.main'),
        element: <Main />
      },
      {
        path: getNavigationValue('sber.detail'),
        element: <Airlines />
      },
      {
        path: getNavigationValue('sber.ticket-detail'),
        element: <TicketDetail />
      },
      { path: '*', element: <h1>404</h1> }
    ]
  },
]);
