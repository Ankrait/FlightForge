import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import { DefaultLayoutContent, DefaultLayoutWrapper } from './index.style';

const DefaultLayout: FC = () => {
  return (
    <DefaultLayoutWrapper>
      <Header />
      <DefaultLayoutContent>
        <Outlet />
      </DefaultLayoutContent>
      <Footer />
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
