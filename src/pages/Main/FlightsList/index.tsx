import React, { FC } from 'react';

import Heading from '../../../ui-kit/Heading';
import { Card, CardContainer, CardContent, CardDateContent, CardHeader, CityInfo, ContentContainer, FlagImage, FlightsContainer, LinkStyled} from './index.style';
import { useGetFlightsQuery } from '../../../store/api/flightsApi/index';
import { useGetCitiesQuery } from '../../../store/api/otherApi';
import FlightImage from '../FlightImage';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

const currencySymbols: { [key: string]: string } = {
  usd: '$',
  eur: '€',
  rub: '₽',
};

const formatDate = (dateString) => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString('ru-RU', {
      month: 'long',
      day: 'numeric',
  });

  return formattedDate;
};

const FlightsList: FC = () => {
  const { data, error, isLoading } = useGetFlightsQuery();
  const { data: cities, error: citiesError, isLoading: citiesLoading  } = useGetCitiesQuery();

  if (isLoading || citiesLoading) {
    return <Loading/>;
  }

  if (error || citiesError) {
    return (
      <ErrorMessage error={error || citiesError}/>
    );
  }

  if (!data || !data.success || !data.data) {
    return <ErrorMessage error={new Error('Нет данных')}/>
  }

  const flights = data.data;

  return (
    <FlightsContainer>
      <Heading variant="h4">Популярные рейсы</Heading>
      <CardContainer>
        {Object.entries(flights).map(([cityCode, flight]) => {
          const originCity = cities?.find(city => city.code === flight.origin);
          const destinationCity = cities?.find(city => city.code === flight.destination);

          return (
            <LinkStyled key={cityCode} to={`/flights/${flight.flight_number}/${flight.destination}`}>
              <Card>
                <FlightImage cityCode={cityCode} />

                <ContentContainer>
                  <CardHeader>
                    <CityInfo>
                      {`${originCity?.name} - ${destinationCity?.name}`}
                      <FlagImage src={require(`./images/flags/${destinationCity?.country_code.toLowerCase()}.png`)} alt="Флаг" />
                    </CityInfo>
                  </CardHeader>

                  <CardDateContent>
                    вылет {formatDate(flight.departure_at)}
                  </CardDateContent>

                  <CardContent>
                    <strong>от {flight.price} {currencySymbols[data.currency.toLowerCase()]} <br /> </strong>
                  </CardContent>
                </ContentContainer>
              </Card>
            </LinkStyled>
          );
        })}
      </CardContainer>
    </FlightsContainer>
  );
};

export default FlightsList;
