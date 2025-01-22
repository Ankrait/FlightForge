import React, { FC } from 'react';

import { useParams } from 'react-router-dom'; // Для получения параметров из URL
import { useGetFlightsQuery } from '../../../store/api/flightsApi'; // Ваш запрос рейсов
import { useGetCitiesQuery } from '../../../store/api/otherApi'; // Запрос для получения городов
import './index.css';


const formatDate = (dateString) => {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const formattedTime = date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    return { formattedDate, formattedTime };
};

const calculateFlightDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    console.log(start);
    console.log(end);

    const differenceInMillis = end.getTime() - start.getTime();
  
    const hours = Math.floor(differenceInMillis / (1000 * 60 * 60)); 
    const minutes = Math.floor((differenceInMillis % (1000 * 60 * 60)) / (1000 * 60));
  
    return `${hours}ч ${minutes}м`;
  };

const FlightDetail: FC = () => {
    const { flightNumber, dest } = useParams();
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

    const flight = Object.entries(flights).map(([cityCode, flight]) => flight)
        .find(flight => flight.flight_number.toString() === flightNumber && flight.destination === dest);
    
    const {formattedDate: depDate, formattedTime: depTime} = formatDate(flight?.departure_at);
    const {formattedDate: retDate, formattedTime: retTime} = formatDate(flight?.return_at);

  
    return (
        <div className="container">
            <header>
                <h1>Детали рейса</h1>
            </header>

            <section className="flight-info">
                <div className="flight-header">
                <h2>Перелет: {`${cities?.find(city => city.code === flight?.origin)?.name}  -  ${cities?.find(city => city.code === flight?.destination)?.name}`}</h2>
                <p className="flight-date">Дата: {depDate}</p>
                </div>
                <div className="flight-details">
                <div className="detail">
                    <strong>Время вылета:</strong>
                    <p>{depTime}</p>
                </div>
                <div className="detail">
                    <strong>Время прибытия:</strong>
                    <p>{retTime}</p>
                </div>
                <div className="detail">
                    <strong>Продолжительность рейса:</strong>
                    <p>{calculateFlightDuration(flight?.departure_at, flight?.return_at)}</p>
                </div>
                <div className="detail">
                    <strong>Цена билета:</strong>
                    <p>{`${flight?.price}`}</p>
                </div>
                </div>
            </section>
        </div>
    );
}
export default FlightDetail;
