import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import {
  DefaultLayoutContent,
  DefaultLayoutWrapper,
} from './index.style';

const DefaultLayout: FC = () => {
  return (
    <DefaultLayoutWrapper>
      <Header />
      <DefaultLayoutContent>
        <Outlet />
      </DefaultLayoutContent>
      <div style={{ background: 'red', padding: '0 8px' }}>Footer</div>
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
