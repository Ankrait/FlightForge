import React, { FC, useState } from 'react';

import { FlightDataResponse } from '../../store/api/flightsApi/index.types';
import Flex from '../../ui-kit/Flex';

import FlightPanel from './FlightsPanel';
import SearchForm from './SearchForm';

const Airlines: FC = () => {
  const [flights, setFlights] = useState<FlightDataResponse['data'] | null>(null);

  return (
    <Flex dir="column" gap={20}>
      <SearchForm setFlights={setFlights}/>
      {flights ? <FlightPanel flights={flights} /> : <p>Нет доступных рейсов. Попробуйте изменить параметры поиска.</p>}
    </Flex>
  );
};

export default Airlines;
