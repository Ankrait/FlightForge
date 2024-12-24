import React from 'react';
import { createHashRouter } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Airlines from '../pages/Airlines';
import Main from '../pages/Main';

import { AIRLINES_PAGE, HOME_PAGE } from './routes';

export const router = createHashRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: HOME_PAGE,
        element: <Main />,
      },
      {
        path: AIRLINES_PAGE,
        element: <Airlines />,
      },
    ],
  },
]);
