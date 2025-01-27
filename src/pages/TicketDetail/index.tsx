import React, { FC } from 'react';

import Flex from '../../ui-kit/Flex';
import FlightDetail from './RouteDetail';
import ScrollToTop from './ScrollToTop';

const Main: FC = () => {
  return (
    <Flex>
        <ScrollToTop/>
        <FlightDetail/>
    </Flex>
  );
};

export default Main;