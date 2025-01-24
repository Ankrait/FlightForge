import React from 'react';
import { LoadingContainer, Spinner, LoadingText } from './index.style';

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Загрузка...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;

