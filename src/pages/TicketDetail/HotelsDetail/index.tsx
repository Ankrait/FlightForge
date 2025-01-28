import React, { FC } from 'react';
import { StyledSection, StyledHotel, StyledInfo, StyledList, HotelContent } from './index.style';
import Heading from '../../../ui-kit/Heading';
import { useGetHotelsQuery } from '../../../store/api/hotelsApi';
import Loading from '../../Main/Loading';
import ErrorMessage from '../../Main/ErrorMessage';
import HotelImage from '../HotelImage';

interface IHotelRequestData {
  location: string;
  checkIn: string;
  checkOut: string;
  currency: string;
  limit: number;
}

const calculatePricePerNight = (price: number | undefined, checkIn: string, checkOut: string) => {
  if (!price) return 0;
  if (checkIn === checkOut) return price;

  const dayInDate = new Date(checkIn);
  const dayOutDate = new Date(checkOut);
  const diffDays = (dayOutDate.getTime() - dayInDate.getTime()) / (1000 * 60 * 60 * 24);
  
  return diffDays > 0 ? Math.round(price / diffDays) : 0;
};

const HotelsDetail: FC<IHotelRequestData> = ({ location, checkIn, checkOut, currency, limit }) => {
  const { data, error, isLoading } = useGetHotelsQuery({ location, checkIn, checkOut, currency, limit });

  if (error) return <ErrorMessage error={error}/>;

  if (isLoading) {
    return (
      <StyledSection>
        <Heading variant="h3">Отели в этом городе</Heading>
        <Loading />
      </StyledSection>
    );
  }

  if (!data || data.length === 0) {
    return (
      <StyledSection>
        <Heading variant="h3">Отели в этом городе</Heading>
        <div>Нет данных об отелях в этом городе</div>
      </StyledSection>
    );
  }

  return (
    <div>
      <Heading variant="h3">Отели в этом городе</Heading>
      <StyledSection>
        <StyledList>
          {data.map((hotel) => (
            <StyledHotel key={hotel.hotelId}>
              <HotelImage hotelId={hotel.hotelId} />
              <HotelContent>
                <Heading variant="h3">{hotel.hotelName}</Heading>
                <StyledInfo>⭐ {hotel.stars} звезд</StyledInfo>
                <StyledInfo>
                  От {Math.round(hotel.priceFrom ?? 0)} ₽ за весь период /{' '}
                  {calculatePricePerNight(hotel.priceAvg, checkIn ?? '', checkOut ?? '')} ₽ за ночь
                </StyledInfo>
              </HotelContent>
            </StyledHotel>
          ))}
        </StyledList>
      </StyledSection>
    </div>
  );
};

export default HotelsDetail;
