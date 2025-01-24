import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { COLORS } from '../../../common/style';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

export const LogoStyled = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.link};

  &.active {
    font-weight: 700;
  }
`;
