import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { COLORS } from './../../../../common/style';

export const Wrapper = styled.div`
  position: relative;
`;

interface ISimilarList {
  opened: boolean;
}

export const SimilarList = styled.div<ISimilarList>`
  position: absolute;
  padding: 8px 0;
  background: ${COLORS.primaryBg};

  ${({ opened }) => {
    if (opened) {
      return css`
        user-select: auto;
        pointer-events: all;
        opacity: 1;
      `;
    } else {
      return css`
        user-select: none;
        pointer-events: none;
        opacity: 0;
      `;
    }
  }}
`;

export const SimilarButton = styled.button`
  background: ${COLORS.primaryBg};
  padding: 6px 10px;
  width: 100%;

  &:focus {
    outline: none;
    background: ${COLORS.secondaryBg};
  }
`;
