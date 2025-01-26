import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import {
  DefaultLayoutContent,
  DefaultLayoutWrapper,
} from './index.style';
import Footer from './Footer';

const DefaultLayout: FC = () => {
  return (
    <DefaultLayoutWrapper>
      <Header />
      <DefaultLayoutContent>
        <Outlet />
      </DefaultLayoutContent>
      {/* <div style={{ background: 'red', padding: '0 8px' }}>Footer</div> */}
      <Footer/>
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
