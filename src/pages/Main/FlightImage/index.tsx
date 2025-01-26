import React, { FC, useState } from 'react';
import { CardImage } from './index.style';
import no_image from './images/no_image.jpeg'; 

interface IFlightImageProps {
  cityCode: string;
}

const FlightImage: FC<IFlightImageProps> = ({ cityCode }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imageUrl = `https://photo.hotellook.com/static/cities/960x720/${cityCode}.jpg`;

  const handleImageError = () => {
    setHasError(true);
  };

  const handleLoading = () => {
    setIsLoading(false);
  };

  return (
    <CardImage
    src={hasError || isLoading ? no_image : imageUrl}
    alt={cityCode}
    onError={handleImageError}
    onLoad={handleLoading}
    />
  );
};

export default FlightImage;
