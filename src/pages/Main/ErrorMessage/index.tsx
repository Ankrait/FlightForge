import React from 'react';
import {StyledError} from './index.style';

const ErrorMessage = ({ error }) => {
  const getErrorMessage = () => {
    if (error) {
      return 'Произошла ошибка при загрузке данных. Пожалуйста, попробуйте снова.';
    }
    
    return 'Неизвестная ошибка. Пожалуйста, попробуйте позже.';
  };

  return (
    <StyledError>
      <strong>Ошибка:</strong> {getErrorMessage()}
    </StyledError>
  );
};

export default ErrorMessage;
