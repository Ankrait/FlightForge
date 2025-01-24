import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { DetailedHTMLProps, FC } from 'react';

interface IHeadingStyled {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

interface IHeading
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    IHeadingStyled {}

const Heading: FC<IHeading> = ({ children, variant = 'h6', ...props }) => {
  return (
    <HeadingStyled as={variant} variant={variant} {...props}>
      {children}
    </HeadingStyled>
  );
};

const HeadingStyled = styled.p<IHeadingStyled>`
  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: 32px;
          font-weight: 700;
        `;
      case 'h2':
        return css`
          font-size: 26px;
          font-weight: 600;
        `;
      case 'h3':
        return css`
          font-size: 22px;
          font-weight: 600;
        `;
      case 'h4':
        return css`
          font-size: 20px;
          font-weight: 600;
        `;
      case 'h5':
        return css`
          font-size: 16px;
          font-weight: 600;
        `;
      default:
        return css`
          font-size: 14px;
          font-weight: 600;
        `;
    }
  }}
`;

export default Heading;
