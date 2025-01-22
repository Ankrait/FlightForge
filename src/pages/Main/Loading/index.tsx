import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';


const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  height: 100vh; /* Покрывает весь экран */
  background-color: rgba(255, 255, 255, 0.1); 
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db; 
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;

const LoadingText = styled.p`
  font-size: 18px;
  color: #3498db;
  margin-top: 10px;
  font-weight: 500;
  margin-bottom: 70dvh;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Загрузка...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;

