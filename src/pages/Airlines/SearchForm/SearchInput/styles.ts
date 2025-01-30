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
    top: 100%;
    left: 0;
    width: 100%;
    padding: 8px 0;
    background: ${COLORS.primaryBg};
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 10; 
    margin-top: 8px; 
    overflow: hidden; 
    transition: opacity 0.3s ease, transform 0.3s ease;

    ${({ opened }) => {
        if (opened) {
            return css`
                user-select: auto;
                pointer-events: all;
                opacity: 1;
                transform: translateY(0);
            `;
        } else {
            return css`
        user-select: none;
        pointer-events: none;
        opacity: 0;
        transform: translateY(-10px);
      `;
        }
    }}
`;

export const SimilarButton = styled.button`
  background: ${COLORS.primaryBg};
  padding: 10px 16px; // Увеличим отступы для удобства
  width: 100%;
  text-align: left;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: ${COLORS.primaryText};
  font-size: 16px; 

  &:hover {
    background: ${COLORS.secondaryBg};
  }

  &:focus {
    outline: none;
    background: ${COLORS.secondaryBg};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.primaryBg};
  }
`;