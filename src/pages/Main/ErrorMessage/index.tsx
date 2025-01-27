import React from 'react';
import {Error} from './index.style';

const ErrorMessage = ({ error }) => {
  const getErrorMessage = () => {
    if (error) {
      return 'Произошла ошибка при загрузке данных. Пожалуйста, попробуйте снова.';
    }
    
    return 'Неизвестная ошибка. Пожалуйста, попробуйте позже.';
  };

  return (
    <Error>
      <strong>Ошибка:</strong> {getErrorMessage()}
    </Error>
  );
};

export default ErrorMessage;
