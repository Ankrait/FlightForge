import React, { FC } from 'react';

import { AIRLINES_PAGE, HOME_PAGE } from '../../../router/routes';
import Flex from '../../../ui-kit/Flex';

import { HeaderWrapper, Link, LogoStyled } from './index.style';

const menuList = [
  {
    label: 'Главная',
    href: HOME_PAGE,
  },
  {
    label: 'Билеты',
    href: AIRLINES_PAGE,
  },
];

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <LogoStyled>FlightForge</LogoStyled>
      <Flex justify="space-between">
        {menuList.map(item => (
          <Link key={item.href} to={item.href}>
            {item.label}
          </Link>
        ))}
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;
