import styled from '@emotion/styled';
import React, { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface IInput
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, IInput>(function Input(props, ref) {
  const { error, ...restProps } = props;

  return (
    <Container>
      <SearchContainer>
        <InputStyled ref={ref} {...restProps} />
      </SearchContainer>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
});

const Container = styled.div`
    position: relative;
    background: linear-gradient(135deg, rgb(179, 208, 253) 0%, rgb(164, 202, 248) 100%);
    border-radius: 1000px;
    padding: 10px;
    display: grid;
    place-content: center;
    z-index: 0;
    max-width: 300px;
    margin: 0 10px;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 50px;
  background: linear-gradient(135deg, rgb(218, 232, 247) 0%, rgb(214, 229, 247) 100%);
  padding: 5px;
  display: flex;
  align-items: center;

  &::after,
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: inherit;
    position: absolute;
  }

  &::before {
    top: -1px;
    left: -1px;
    background: linear-gradient(0deg, rgb(218, 232, 247) 0%, rgb(255, 255, 255) 100%);
    z-index: -1;
  }

  &::after {
    bottom: -1px;
    right: -1px;
    background: linear-gradient(0deg, rgb(163, 206, 255) 0%, rgb(211, 232, 255) 100%);
    box-shadow: rgba(79, 156, 232, 0.7019607843) 3px 3px 5px 0px,
      rgba(79, 156, 232, 0.7019607843) 5px 5px 20px 0px;
    z-index: -2;
  }
`;

const InputStyled = styled.input`
  padding: 10px;
  width: 100%;
  background: linear-gradient(135deg, rgb(218, 232, 247) 0%, rgb(214, 229, 247) 100%);
  border: none;
  color: #191970;
  font-size: 20px;
  border-radius: 50px;

  &:focus {
    outline: none;
    background: linear-gradient(135deg, rgb(239, 247, 255) 0%, rgb(214, 229, 247) 100%);
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 5px;
  font-size: 14px;
`;

export default Input;