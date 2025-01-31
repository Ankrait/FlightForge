import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import TicketDetail from '../pages/TicketDetail';
import Airlines from '../pages/Airlines';
import Main from '../pages/Main';

import { getNavigationValue } from '@brojs/cli';

export const router = createBrowserRouter([
  {
    path: getNavigationValue('flight-forge.main'),
    element: <DefaultLayout />,
    children: [
      {
        path: getNavigationValue('flight-forge.main'),
        element: <Main />
      },
      {
        path: getNavigationValue('flight-forge.detail'),
        element: <Airlines />
      },
      {
        path: getNavigationValue('flight-forge.ticket-detail'),
        element: <TicketDetail />
      },
      { path: '*', element: <h1>404</h1> }
    ]
  },
]);
