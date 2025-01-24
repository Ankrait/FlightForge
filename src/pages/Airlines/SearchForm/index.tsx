import React, { FC, useRef, useState } from 'react';

import {
  useGetAirportsQuery,
  useGetCitiesQuery,
  useGetCountriesQuery,
} from '../../../store/api/otherApi';
import Button from '../../../ui-kit/Button';
import Flex from '../../../ui-kit/Flex';

import SearchInput from './SearchInput';
import { IOrigin } from './types';

const SearchForm: FC = () => {
  const [toCode, setToCode] = useState<IOrigin | null>(null);
  const [fromCode, setFromCode] = useState<IOrigin | null>(null);

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

  const onSubmit = () => {
    const findFrom = cities?.find(el => el.code === toCode?.code);
    const findTo = cities?.find(el => el.code === fromCode?.code);

    console.log(findFrom);
    console.log(findTo);
  };

  return (
    <form onSubmit={onSubmit}>
      <Flex align="flex-start" gap={10}>
        <SearchInput
          placeholder="Откуда?"
          cities={cities || []}
          airports={airports || []}
          countries={countries || []}
          setOrigin={setToCode}
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
          setOrigin={setFromCode}
        />
        <Button disabled={!toCode || !fromCode} type="submit">
          Найти
        </Button>
      </Flex>
    </form>
  );
};

export default SearchForm;
