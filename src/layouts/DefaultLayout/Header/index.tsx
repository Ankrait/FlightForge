import React, { FC } from 'react';

import Flex from '../../../ui-kit/Flex';

import { HeaderWrapper, Link, LogoStyled } from './index.style';
import { getNavigationValue } from '@brojs/cli';

const menuList = [
  {
    name: 'Главная',
    href: getNavigationValue('flight-forge.main'),
  },
  {
    name: 'Билеты',
    href: getNavigationValue('flight-forge.detail'),
  },
];

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <LogoStyled>FlightForge</LogoStyled>
      <Flex justify="space-between">
        {menuList.map(item => (
          <Link key={item.href} to={item.href}>
            {item.name}
          </Link>
        ))}
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;
