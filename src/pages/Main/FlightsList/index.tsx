import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../../ui-kit/Heading';
import { Card, CardContainer, CardContent, CardFooter, CardHeader, FlightsContainer } from './index.style';
import { useGetFlightsQuery } from '../../../store/api/flightsApi/index';
import { useGetCitiesQuery } from '../../../store/api/otherApi';
import FlightImage from '../FlightImage';  // Импортируем новый компонент

const currencySymbols: { [key: string]: string } = {
  usd: '$',
  eur: '€',
  rub: '₽',
};

const FlightsList: FC = () => {
  const { data, error, isLoading } = useGetFlightsQuery();
  const { data: cities, error: citiesError, isLoading: citiesLoading  } = useGetCitiesQuery();

  if (isLoading || citiesLoading) {
    return <div>Загрузка...</div>;
  }

  if (error || citiesError) {
    return <div>Ошибка: {JSON.stringify(error || citiesError)}</div>;
  }

  if (!data || !data.success || !data.data) {
    return <div>Ошибка: Нет данных</div>;
  }

  const flights = data.data;

  return (
    <FlightsContainer>
      <Heading variant="h4">Популярные рейсы</Heading>
      <CardContainer>
        {Object.entries(flights).map(([cityCode, flight]) => (
          <Card key={cityCode}>

            <FlightImage cityCode={cityCode} />
            
            <CardHeader>
              {`${cities?.find(city => city.code === flight.origin)?.name}  -  ${cities?.find(city => city.code === flight.destination)?.name}`}
            </CardHeader>
            <CardContent>
              <strong>от {flight.price} {currencySymbols[data.currency.toLowerCase()]} <br /> </strong>
            </CardContent>
            <CardFooter>Подробнее</CardFooter>
          </Card>
        ))}
      </CardContainer>
    </FlightsContainer>
  );
};

export default FlightsList;
