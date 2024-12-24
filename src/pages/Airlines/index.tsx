import React, { FC } from 'react';

import Flex from '../../ui-kit/Flex';

import SearchForm from './SearchForm';

const Airlines: FC = () => {
  return (
    <Flex dir="column" gap={20}>
      <SearchForm />
    </Flex>
  );
};

export default Airlines;
