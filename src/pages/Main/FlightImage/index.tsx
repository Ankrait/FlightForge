import React, { FC, useState } from 'react';
import { CardImage } from './index.style';

// Пропсы для компонента
interface IFlightImageProps {
  cityCode: string;
}

const FlightImage: FC<IFlightImageProps> = ({ cityCode }) => {
  const [hasError, setHasError] = useState(false);

  const imageUrl = `https://photo.hotellook.com/static/cities/960x720/${cityCode}.jpg`;

  const handleImageError = () => {
    setHasError(true);
  };

  const placeholderImage = "https://via.placeholder.com/960x720";  // поставить изображение

  return (
    <CardImage
    src={hasError ? placeholderImage : imageUrl}
    alt={cityCode}
    onError={handleImageError}
    />
  );
};

export default FlightImage;
