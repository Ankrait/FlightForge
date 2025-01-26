import { skipToken } from '@reduxjs/toolkit/query';
import React, { FC, useRef, useState } from 'react';

import { useGetCityToCityFlightsQuery} from '../../../store/api/flightsApi';
import { FlightDataResponse } from '../../../store/api/flightsApi/index.types';
import {
  useGetAirportsQuery,
  useGetCitiesQuery,
  useGetCountriesQuery,
} from '../../../store/api/otherApi';
import Button from '../../../ui-kit/Button';
import Flex from '../../../ui-kit/Flex';

import SearchInput from './SearchInput';
import { IOrigin } from './types';

const SearchForm: FC<{ setFlights: (data: FlightDataResponse['data']) => void }> = ({ setFlights }) => {
  const [toCode, setToCode] = useState<IOrigin | null>(null);
  const [fromCode, setFromCode] = useState<IOrigin | null>(null);
  const [canFetch, setCanFetch] = useState(false);

  const fromInputRef = useRef<HTMLInputElement | null>(null);

  const { data: cities } = useGetCitiesQuery(undefined, {
    selectFromResult: ({ data, ...state }) => {
      return {
        data: data?.filter(el => el.has_flightable_airport),
        ...state,
      };
    },
  });
  const { data: countries } = useGetCountriesQuery();
  const { data: airports } = useGetAirportsQuery(undefined, {
    selectFromResult: ({ data, ...state }) => {
      return {
        data: data?.filter(el => el.flightable),
        ...state,
      };
    },
  });

  const { data: flightData, isLoading, error } = useGetCityToCityFlightsQuery(
    canFetch && toCode && fromCode
      ? { origin: fromCode.code, destination: toCode.code}
      : skipToken // Пропустить запрос, если данных нет
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!toCode || !fromCode) return;

    setCanFetch(true);
  };

  if (flightData && flightData.success) {
    setFlights(flightData.data);
  } else if (error) {
    console.error('Ошибка при запросе:', error);
  }

  return (
    <form onSubmit={onSubmit}>
      <Flex align="flex-start" gap={10}>
        <SearchInput
          placeholder="Откуда?"
          cities={cities || []}
          airports={airports || []}
          countries={countries || []}
          setOrigin={setFromCode}
          handleSelect={() => {
            if (fromInputRef.current) fromInputRef.current.focus();
          }}
        />
        <SearchInput
          ref={fromInputRef}
          placeholder="Куда?"
          cities={cities || []}
          airports={airports || []}
          countries={countries || []}
          setOrigin={setToCode}
        />
        <Button disabled={!toCode || !fromCode || isLoading} type="submit">
          { isLoading ? 'Загрузка...' : 'Найти'}
        </Button>
      </Flex>
    </form>
  );
};

export default SearchForm;
