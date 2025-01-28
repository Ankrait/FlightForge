import React, { FC, useState } from 'react';

import { FlightDataResponse } from '../../store/api/flightsApi/index.types';
import Button from '../../ui-kit/Button';
import Flex from '../../ui-kit/Flex';

import FlightPanel from './FlightsPanel';
import SearchForm from './SearchForm';


const Airlines: FC = () => {
  const [flights, setFlights] = useState<FlightDataResponse['data'] | null>(null);
  const [sortByDate, setSortByDate] = useState<'asc' | 'desc'>('asc');

  const handleSortByDate = () => {
    setSortByDate(prevSort => prevSort === 'asc' ? 'desc' : 'asc');
  };

  const sortedFlights = flights ? Object.values(flights).sort((a, b) => {
    const dateA = new Date(a.depart_date).getTime();
    const dateB = new Date(b.depart_date).getTime();
    return sortByDate === 'asc' ? dateA - dateB : dateB - dateA;
  }) : null;

  return (
    <Flex dir="column" gap={20}>
      <SearchForm setFlights={setFlights} />
      <Button onClick={handleSortByDate}>
        Сортировать по дате вылета ({sortByDate === 'asc' ? 'по возрастанию' : 'по убыванию'})
      </Button>
      {sortedFlights ? (
        <FlightPanel flights={sortedFlights} />
      ) : (
        <p>Нет доступных рейсов. Попробуйте изменить параметры поиска.</p>
      )}
    </Flex>
  );
};

export default Airlines;