import React, { FC, useState } from 'react';

import { FlightDataResponse, FlightData } from '../../store/api/flightsApi/index.types';
import Button from '../../ui-kit/Button';
import Flex from '../../ui-kit/Flex';

import Filters from './FlightsFilters';
import { FiltersType } from './FlightsFilters/index.types';
import FlightPanel from './FlightsPanel';
import SearchForm from './SearchForm';

const Airlines: FC = () => {
  const [flights, setFlights] = useState<FlightDataResponse['data'] | null>(null);
  const [sortBy, setSortBy] = useState<'date' | 'price'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filters, setFilters] = useState<FiltersType>({
    maxPrice: null,
    maxStops: null,
    tripClass: null,
    departureDateStart: null,
    departureDateEnd: null,
    returnDateStart: null,
    returnDateEnd: null,
  });

  const handleSortByDate = () => {
    setSortBy('date');
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleSortByPrice = () => {
    setSortBy('price');
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const filterFlights = (flights: FlightData[], filters: FiltersType): FlightData[] => {
    return flights.filter((flight) => {
      // Фильтр по цене
      if (filters.maxPrice !== null && flight.value > filters.maxPrice) {
        return false;
      }

      if (
        filters.maxStops !== null &&
        flight.number_of_changes > filters.maxStops
      ) {
        return false;
      }

      if (
        filters.tripClass !== null &&
        flight.trip_class !== filters.tripClass
      ) {
        return false;
      }

      // Фильтр по дате отправки
      if (filters.departureDateStart || filters.departureDateEnd) {
        const departDate = new Date(flight.depart_date).getTime();
        const startDate = filters.departureDateStart ? new Date(filters.departureDateStart).getTime() : null;
        const endDate = filters.departureDateEnd ? new Date(filters.departureDateEnd).getTime() : null;

        if (startDate && departDate < startDate) return false;
        if (endDate && departDate > endDate) return false;
      }

      // Фильтр по дате возвращения
      if (filters.returnDateStart || filters.returnDateEnd) {
        const returnDate = flight.return_date ? new Date(flight.return_date).getTime() : null;
        const startDate = filters.returnDateStart ? new Date(filters.returnDateStart).getTime() : null;
        const endDate = filters.returnDateEnd ? new Date(filters.returnDateEnd).getTime() : null;

        if (returnDate === null) return false; // Если рейс без возвращения
        if (startDate && returnDate < startDate) return false;
        if (endDate && returnDate > endDate) return false;
      }

      return true;
    });
  };

  const sortedAndFilteredFlights = flights
    ? filterFlights(Object.values(flights), filters).sort((a, b) => {
      if (sortBy === 'date') {
        const dateA = new Date(a.depart_date).getTime();
        const dateB = new Date(b.depart_date).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      } else {
        return sortOrder === 'asc' ? a.value - b.value : b.value - a.value;
      }
    })
    : null;

  const handleResetFilters = () => {
    setFilters({
      maxPrice: null,
      maxStops: null,
      tripClass: null,
      departureDateStart: null,
      departureDateEnd: null,
      returnDateStart: null,
      returnDateEnd: null,
    });
  };

  return (
    <Flex dir="column" gap={20}>
      <SearchForm setFlights={setFlights} />

      <Button onClick={handleSortByDate}>
        Сортировать по дате ({sortBy === 'date' && sortOrder === 'asc' ? 'по возрастанию' : 'по убыванию'})
      </Button>

      <Button onClick={handleSortByPrice}>
        Сортировать по цене ({sortBy === 'price' && sortOrder === 'asc' ? 'по возрастанию' : 'по убыванию'})
      </Button>

      <Filters
        filters={filters}
        setFilters={setFilters}
        onResetFilters={handleResetFilters}
      />

      {sortedAndFilteredFlights ? (
        <>
          <p>Найдено рейсов: {sortedAndFilteredFlights.length}</p>
          <FlightPanel flights={sortedAndFilteredFlights} />
        </>
      ) : (
        <p>Нет доступных рейсов. Попробуйте изменить параметры поиска.</p>
      )}
    </Flex>
  );
};

export default Airlines;