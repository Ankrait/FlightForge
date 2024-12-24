import React, { FC } from 'react';

import Flex from '../../ui-kit/Flex';
import Heading from '../../ui-kit/Heading';

const Main: FC = () => {
  return (
    <Flex dir="column" gap={30}>
      <Heading variant="h1">Главная</Heading>
    </Flex>
  );
};

export default Main;
