import React, { FC } from 'react';

import { useParams } from 'react-router-dom'; // Для получения параметров из URL
import { useGetFlightsQuery } from '../../../store/api/flightsApi'; // Ваш запрос рейсов
import { useGetCitiesQuery } from '../../../store/api/otherApi'; // Запрос для получения городов
import HotelsDetail from '../HotelsDetail/index';
import { StyledContainer, StyledFlightDate, StyledFlightDetail, StyledFlightDetails, StyledFlightHeader, StyledSection } from './index.style';
import Heading from '../../../ui-kit/Heading';

const currencySymbols: { [key: string]: string } = {
    usd: '$',
    eur: '€',
    rub: '₽',
};

const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0'); 

    const formattedDateYYYYMMdd = `${year}-${month}-${day}`;

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

    return { formattedDate, formattedTime, formattedDateYYYYMMdd };
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
    
    const {formattedDate: depDate, formattedTime: depTime, formattedDateYYYYMMdd: formattedDepDateYYYYMMdd} = formatDate(flight?.departure_at);
    const {formattedDate: retDate, formattedTime: retTime, formattedDateYYYYMMdd: formattedRetDateYYYYMMdd} = formatDate(flight?.return_at);
  
    return (
        <StyledContainer>
            <header>
                <Heading variant='h2'>Детали рейса</Heading>
            </header>

            <StyledSection>
                <StyledFlightHeader>
                    <Heading variant='h3'>Перелет: {`${cities?.find(city => city.code === flight?.origin)?.name}  -  ${cities?.find(city => city.code === flight?.destination)?.name}`}</Heading>
                </StyledFlightHeader>
                <StyledFlightDetails>
                    <StyledFlightDetail>
                        <Heading variant='h4'>Время вылета:</Heading>
                        <StyledFlightDate>{depDate} {depTime}</StyledFlightDate>
                    </StyledFlightDetail>
                    <StyledFlightDetail>
                        <Heading variant='h4'>Время возвращения:</Heading>
                        <StyledFlightDate>{retDate} {retTime}</StyledFlightDate>
                    </StyledFlightDetail>
                    <StyledFlightDetail>
                        <Heading variant='h4'>Цена билета:</Heading>
                        <StyledFlightDate>{`${flight?.price}`} {currencySymbols['rub']}</StyledFlightDate>
                    </StyledFlightDetail>
                </StyledFlightDetails>
            </StyledSection>

            <HotelsDetail location={flight?.destination} checkIn={formattedDepDateYYYYMMdd} checkOut={formattedRetDateYYYYMMdd} currency='rub' limit={5}/>
        </StyledContainer>
    );
}
export default FlightDetail;
