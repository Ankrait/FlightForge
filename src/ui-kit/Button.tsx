/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { DetailedHTMLProps, FC } from 'react';

import { color } from '../common/style';

interface IButton
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: FC<IButton> = ({ children, ...props }) => {
  return (
    <button css={style} {...props}>
      {children}
    </button>
  );
};

const style = css({
  borderRadius: 4,
  padding: '8px 12px',
  fontSize: 16,
  border: 'none',
  background: color.button,
  color: color.buttonText,
  transition: 'background .3s ease',
  ':hover': {
    background: color.primaryText,
  },
});

export default Button;
