import React, { FC } from 'react';

import Flex from '../../ui-kit/Flex';
import FlightDetail from './RouteDetail';

const Main: FC = () => {
  return (
    <Flex>
        <FlightDetail/>
    </Flex>
  );
};

export default Main;