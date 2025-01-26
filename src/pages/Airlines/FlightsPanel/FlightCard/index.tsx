import React, { FC } from 'react';

import { FlightData } from '../../../../store/api/flightsApi/index.types';

interface FlightCardProps {
  flight: FlightData;
}

const Index: FC<FlightCardProps> = ({ flight }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.header}>
        Рейс {flight.origin} → {flight.destination}
      </h3>
      <div style={styles.details}>
        <p><strong>Откуда:</strong> {flight.origin}</p>
        <p><strong>Куда:</strong> {flight.destination}</p>
        <p><strong>Класс:</strong> {getTripClass(flight.trip_class)}</p>
        <p><strong>Цена:</strong> {flight.value} руб.</p>
        <p><strong>Пересадки:</strong> {flight.number_of_changes}</p>
        <p><strong>Вылет:</strong> {new Date(flight.depart_date).toLocaleString()}</p>
        <p><strong>Возврат:</strong> {new Date(flight.return_date).toLocaleString()}</p>
        <p><strong>Расстояние:</strong> {flight.distance} км</p>
        <p><strong>Актуально:</strong> {flight.actual ? 'Да' : 'Нет'}</p>
        <p><strong>Агент:</strong> {flight.gate}</p>
      </div>
    </div>
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

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    width: '320px',
    margin: '16px',
  },
  header: {
    marginBottom: '12px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: '14px',
    color: '#555',
  },
};
