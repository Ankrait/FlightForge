import styled from '@emotion/styled';

import { InputProps } from './FlightsFilters/index.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(135deg, rgb(179, 208, 253) 0%, rgb(164, 202, 248) 100%);
  border-radius: 12px;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  background: linear-gradient(135deg, rgb(218, 232, 247) 0%, rgb(214, 229, 247) 100%);
  color: #333;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    outline: none;
    background: linear-gradient(135deg, rgb(239, 247, 255) 0%, rgb(214, 229, 247) 100%);
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
  }
`;

export const Select = styled.select`
  padding: 12px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  background: linear-gradient(135deg, rgb(218, 232, 247) 0%, rgb(214, 229, 247) 100%);
  color: #333;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    outline: none;
    background: linear-gradient(135deg, rgb(239, 247, 255) 0%, rgb(214, 229, 247) 100%);
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 123, 255, 0.3);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px;
  border-radius: 50px;
  background: linear-gradient(135deg, rgb(218, 232, 247) 0%, rgb(214, 229, 247) 100%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const SortSection = styled(FilterSection)`
  margin-top: 16px;
`;

export const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 24px;
  background: #ffffff;
  border-radius: 12px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #555;
  font-weight: 600;
  margin-bottom: 4px;
`;

// export const StyledInput = styled(Input)`
//     font-size: 14px;
// `;

export const StyledInput = styled(Input)<InputProps>`
  font-size: 14px;
  border-color: ${({ hasError }) => (hasError ? 'red' : '#d9d9d9')};

  &:focus {
    border-color: ${({ hasError }) => (hasError ? 'red' : '#40a9ff')};
    box-shadow: ${({ hasError }) =>
      hasError ? '0 0 0 2px rgba(255, 0, 0, 0.2)' : '0 0 0 2px rgba(24, 144, 255, 0.2)'};
  }
`;

export const StyledSelect = styled(Select)`
  font-size: 14px;
`;

export const Actions = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

  @media (max-width: 600px) {
    grid-column: span 1;
    flex-direction: column;
    align-items: stretch;
  }
`;

export const StyledButton = styled(Button)`
  font-size: 14px;
  font-weight: bold;
`;

export const StyledErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;