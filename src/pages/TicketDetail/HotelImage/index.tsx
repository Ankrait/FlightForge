import React, { FC, useState } from 'react';
import { StyledImage } from './index.style';
import no_hotel_photo from './images/no_hotel_photo.png'; 

interface IFlightImageProps {
  hotelId: number | undefined;
}

const HotelImage: FC<IFlightImageProps> = ({ hotelId }) => {
  const [hasError, setHasError] = useState(false);

  const imageUrl = `https://photo.hotellook.com/image_v2/limit/h${hotelId}/220.jpg`;

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <StyledImage
    src={hasError ? no_hotel_photo : imageUrl}
    alt="Фото отеля"
    onError={handleImageError}
    />
  );
};

export default HotelImage;
