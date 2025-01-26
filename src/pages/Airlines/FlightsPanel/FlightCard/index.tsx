import React, { FC } from 'react';

import { FlightData } from '../../../../store/api/flightsApi/index.types';

import {Card, CardHeader, CardDetails, FlightCard, FlightHeader, FlightRoute, FlightDate, FlightDetails, FlightDetail,
  FlightClassSpan, FlightChangesSpan, FlightGateSpan, FlightDistanceSpan, FlightPrice, FlightFoundAt, FlightFooter} from './index.style';

interface FlightCardProps {
  flight: FlightData;
}

const Index: FC<FlightCardProps> = ({ flight }) => {
  return (
    <Card>
      <CardHeader>
        Рейс {flight.origin} → {flight.destination}
      </CardHeader>
      <CardDetails>
          <FlightHeader>
            <FlightRoute>
              <span style={{ color: '#007BFF' }}>{flight.origin}</span> → <span style={{ color: '#007BFF' }}>{flight.destination}</span>
            </FlightRoute>
            <FlightDate>
              <span>Вылет: {new Date(flight.depart_date).toLocaleString()}</span> - <span>Возвращение: {new Date(flight.return_date).toLocaleString()}</span>
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
            <FlightFoundAt>{flight.found_at}</FlightFoundAt>
          </FlightFooter>
      </CardDetails>
    </Card>
  );
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

export default Index;
