import React, { FC } from 'react';

import { FlightData } from '../../../../store/api/flightsApi/index.types';
import { getCityFromLocalStorage } from '../../../../utils/LocalStorage';

import {
  Card,
  CardHeader,
  CardDetails,
  FlightHeader,
  FlightRoute,
  FlightDate,
  FlightDetails,
  FlightDetail,
  FlightClassSpan,
  FlightChangesSpan,
  FlightGateSpan,
  FlightDistanceSpan,
  FlightPrice,
  FlightFoundAt,
  FlightFooter,
} from './index.style';

interface FlightCardProps {
  flight: FlightData;
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleString();
};

const getTripClass = (tripClass: number): string => {
  switch (tripClass) {
    case 0:
      return 'Эконом';
    case 1:
      return 'Бизнес';
    case 2:
      return 'Первый';
    default:
      return 'Неизвестный';
  }
};

const FlightCard: FC<FlightCardProps> = ({ flight }) => {
  const originCityName = getCityFromLocalStorage(flight.origin) || flight.origin;
  const destinationCityName = getCityFromLocalStorage(flight.destination) || flight.destination;

  return (
    <Card>
      <CardHeader>
        Рейс {flight.origin} → {flight.destination}
      </CardHeader>
      <CardDetails>
        <FlightHeader>
          <FlightRoute>
            <span style={{ color: '#007BFF' }}>{originCityName}</span> →{' '}
            <span style={{ color: '#007BFF' }}>{destinationCityName}</span>
          </FlightRoute>
          <FlightDate>
            <span>Вылет: {formatDate(flight.depart_date)}</span> -{' '}
            <span>Возвращение: {formatDate(flight.return_date)}</span>
          </FlightDate>
        </FlightHeader>

        <FlightDetails>
          <FlightDetail>
            Платформа: <FlightGateSpan>{flight.gate}</FlightGateSpan>
          </FlightDetail>
          <FlightDetail>
            Пересадки: <FlightChangesSpan>{flight.number_of_changes}</FlightChangesSpan>
          </FlightDetail>
          <FlightDetail>
            Расстояние: <FlightDistanceSpan>{flight.distance} км</FlightDistanceSpan>
          </FlightDetail>
        </FlightDetails>

        <FlightFooter>
          <FlightClassSpan>{getTripClass(flight.trip_class)}</FlightClassSpan>
          <FlightPrice>{flight.value} руб.</FlightPrice>
          <FlightFoundAt>Найдено: {formatDate(flight.found_at)}</FlightFoundAt>
        </FlightFooter>
      </CardDetails>
    </Card>
  );
};

export default FlightCard;