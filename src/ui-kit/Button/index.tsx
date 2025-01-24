import styled from '@emotion/styled';

import { COLORS } from '../../common/style';

const Button = styled.button`
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  background: ${COLORS.button};
  color: ${COLORS.buttonText};
  transition: background 0.3s ease;

  &:hover {
    background: ${COLORS.primaryText};
  }

  &:disabled {
    background: ${COLORS.hint};
  }
`;

export default Button;
