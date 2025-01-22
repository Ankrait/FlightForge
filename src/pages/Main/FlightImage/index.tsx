import React, { FC, useState } from 'react';
import { CardImage } from './index.style';
import no_image from './images/no_image.jpeg'; 

interface IFlightImageProps {
  cityCode: string;
}

const FlightImage: FC<IFlightImageProps> = ({ cityCode }) => {
  const [hasError, setHasError] = useState(false);

  const imageUrl = `https://photo.hotellook.com/static/cities/960x720/${cityCode}.jpg`;

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <CardImage
    src={hasError ? no_image : imageUrl}
    alt={cityCode}
    onError={handleImageError}
    />
  );
};

export default FlightImage;
