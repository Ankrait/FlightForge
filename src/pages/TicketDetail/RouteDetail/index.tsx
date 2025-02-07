import React, { FC } from 'react';

import { useParams } from 'react-router-dom';
import { useGetFlightsQuery } from '../../../store/api/flightsApi';
import { useGetCitiesQuery, useGetAirlinesQuery } from '../../../store/api/otherApi';
import HotelsDetail from '../HotelsDetail/index';
import { StyledContainer, StyledFlightDate, StyledFlightDetail, StyledFlightDetails, StyledFlightHeader, StyledSection } from './index.style';
import Heading from '../../../ui-kit/Heading';
import ErrorMessage from '../../Main/ErrorMessage';
import Loading from '../../Main/Loading';
import { formatDate } from '../utils/index';

const currencySymbols: { [key: string]: string } = {
    usd: '$',
    eur: '€',
    rub: '₽',
};

const FlightDetail: FC = () => {
    const { flightNumber, dest } = useParams();
    const { data, error, isLoading } = useGetFlightsQuery();
    const { data: cities, error: citiesError, isLoading: citiesLoading  } = useGetCitiesQuery();
    const { data: airlines, error: airlinesError, isLoading: airlinesLoading  } = useGetAirlinesQuery();
  
    if (isLoading || citiesLoading || airlinesLoading) {
      return (
            <StyledContainer>
                <Loading/>;
            </StyledContainer>
        );
    }
  
    if (error || citiesError || airlinesError) {
      return (
        <StyledContainer>
            <ErrorMessage error={error || citiesError || airlinesError} />;
        </StyledContainer>
      );
    }
  
    if (!data || !data.success || !data.data) {
      return (
        <StyledContainer>
             <ErrorMessage error={new Error('Нет данных')} />;
        </StyledContainer>
      );
    }
  
    const flights = data.data;

    const flight = Object.entries(flights).map(([cityCode, flight]) => flight)
        .find(flight => flight.flight_number.toString() === flightNumber && flight.destination === dest);
    
    const {formattedDate: depDate, formattedTime: depTime, formattedDateYYYYMMdd: formattedDepDateYYYYMMdd} = formatDate(flight?.departure_at);
    const {formattedDate: retDate, formattedTime: retTime, formattedDateYYYYMMdd: formattedRetDateYYYYMMdd} = formatDate(flight?.return_at);
  
    const getAirlineName = (code) => {
        const airline = airlines?.find((airline) => airline.code === flight?.airline);
        return airline?.name ? airline?.name : airline?.name_translations.en;
    }

    return (
        <StyledContainer>
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
                    <StyledFlightDetail>
                        <Heading variant='h4'>Пересадки:</Heading>
                        {flight?.transfers == 0 ? <StyledFlightDate>Прямой</StyledFlightDate> : <StyledFlightDate>С пересадками</StyledFlightDate>}
                    </StyledFlightDetail>
                    <StyledFlightDetail>
                        <Heading variant='h4'>Авиалинии:</Heading>
                        <StyledFlightDate>{getAirlineName(flight?.airline)}</StyledFlightDate>
                    </StyledFlightDetail>
                </StyledFlightDetails>
            </StyledSection>

            <HotelsDetail location={flight?.destination ?? ""} checkIn={formattedDepDateYYYYMMdd} checkOut={formattedRetDateYYYYMMdd} currency='rub' limit={5}/>
        </StyledContainer>
    );
}
export default FlightDetail;
