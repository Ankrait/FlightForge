import styled from '@emotion/styled';
import React, { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { COLORS } from '../../common/style';

interface IInput
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, IInput>(function Input(props, ref) {
  const { error, ...restProps } = props;

  return (
    <div>
      <InputStyled ref={ref} {...restProps} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
});

const InputStyled = styled.input`
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  background: ${COLORS.secondaryBg};
`;

export default Input;
