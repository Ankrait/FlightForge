import { skipToken } from '@reduxjs/toolkit/query';
import React, { FC, useRef, useState } from 'react';

import { useGetCityToCityFlightsQuery } from '../../../store/api/flightsApi';
import { FlightDataResponse } from '../../../store/api/flightsApi/index.types';
import { useGetCitiesQuery } from '../../../store/api/otherApi';
import Button from '../../../ui-kit/Button';
import Flex from '../../../ui-kit/Flex';
import { saveCityToLocalStorage } from '../../../utils/LocalStorage';

import SearchInput from './SearchInput';
import { IOrigin } from './types';

const SearchForm: FC<{ setFlights: (data: FlightDataResponse['data']) => void }> = ({
  setFlights,
}) => {
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

  const {
    data: flightData,
    isLoading,
    error,
  } = useGetCityToCityFlightsQuery(
    canFetch && toCode && fromCode
      ? { origin: fromCode.code, destination: toCode.code }
      : skipToken, // Пропустить запрос, если данных нет
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!toCode || !fromCode) return;

    saveCityToLocalStorage(fromCode.code, fromCode.name);
    saveCityToLocalStorage(toCode.code, toCode.name);

    setCanFetch(true);
  };

  const handleFromCodeChange = (selectedCity: IOrigin | null) => {
    setFromCode(selectedCity);
    if (selectedCity) {
      saveCityToLocalStorage(selectedCity.code, selectedCity.name);
    }
  };

  const handleToCodeChange = (selectedCity: IOrigin | null) => {
    setToCode(selectedCity);
    if (selectedCity) {
      saveCityToLocalStorage(selectedCity.code, selectedCity.name);
    }
  };

  if (flightData && flightData.success) {
    setFlights(flightData.data);
  } else if (error) {
    console.error('Ошибка при запросе:', error);
  }

  return (
    <form onSubmit={onSubmit}>
      <Flex align="center" justify="center" gap={10}>
        <SearchInput
          placeholder="Откуда?"
          cities={cities || []}
          setOrigin={handleFromCodeChange}
          handleSelect={() => {
            if (fromInputRef.current) fromInputRef.current.focus();
          }}
        />
        <SearchInput
          ref={fromInputRef}
          placeholder="Куда?"
          cities={cities || []}
          setOrigin={handleToCodeChange}
        />
        <Button disabled={!toCode || !fromCode || isLoading} type="submit">
          {isLoading ? 'Загрузка...' : 'Найти'}
        </Button>
      </Flex>
    </form>
  );
};

export default SearchForm;
