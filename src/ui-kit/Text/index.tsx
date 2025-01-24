import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { COLORS } from '../../common/style';

interface ITextStyled {
  size?: 'text' | 'title' | 'subtitle';
  variant?: 'primary' | 'success' | 'danger' | 'link';
}

interface IText
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>,
    ITextStyled {}

const Text: FC<IText> = ({ size, variant, children, ...props }) => {
  return (
    <TextStyled size={size} variant={variant} {...props}>
      {children}
    </TextStyled>
  );
};

const TextStyled = styled.p<ITextStyled>`
  ${({ size = 'text' }) => {
    switch (size) {
      case 'text':
        return css`
          font-size: 14px;
          font-weight: 400;
        `;

      case 'title':
        return css`
          font-size: 16px;
          font-weight: 600;
        `;

      case 'subtitle':
        return css`
          font-size: 14px;
          font-weight: 600;
        `;
    }
  }}

  color: ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return COLORS.primaryText;

      case 'danger':
        return COLORS.danger;

      case 'success':
        return COLORS.success;

      case 'link':
        return COLORS.link;
    }
  }};
`;

export default Text;
