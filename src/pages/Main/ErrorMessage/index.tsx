import React from 'react';
import {Error} from './index.style';

const ErrorMessage = ({ error, citiesError }) => {
  const getErrorMessage = () => {
    if (error) {
      return 'Произошла ошибка при загрузке данных. Пожалуйста, попробуйте снова.';
    }
    
    if (citiesError) {
      return 'Не удалось найти города. Пожалуйста, проверьте ваше подключение или попробуйте позже.';
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
