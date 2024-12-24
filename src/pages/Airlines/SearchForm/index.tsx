import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  useGetAirportsQuery,
  useGetCitiesQuery,
  useGetCountriesQuery,
} from '../../../store/api/otherApi';
import Button from '../../../ui-kit/Button';
import Flex from '../../../ui-kit/Flex';
import Input from '../../../ui-kit/Input';

interface ISearchForm {
  fromCountryCode: string;
  toCountryCode: string;
}

const requiredErrorMes = 'Поле обязательно';

const scheme = yup.object({
  fromCountryCode: yup.string().min(1).max(16).required(requiredErrorMes),
  toCountryCode: yup.string().required(requiredErrorMes),
});

const SearchForm: FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<ISearchForm>({
    mode: 'all',
    resolver: yupResolver(scheme),
  });

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

  const onSubmit = (data: ISearchForm) => {
    const findFrom = cities?.find(el => el.code === data.fromCountryCode);
    const findTo = cities?.find(el => el.code === data.toCountryCode);

    if (!findFrom) {
      setError('fromCountryCode', {
        message: 'Город не найден',
      });
      return;
    }

    if (!findTo) {
      setError('toCountryCode', {
        message: 'Город не найден',
      });
      return;
    }

    console.log(findFrom);
    console.log(findTo);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex align="flex-start" gap={10}>
        <Input
          {...register('fromCountryCode')}
          placeholder="Откуда?"
          error={errors.fromCountryCode?.message}
        />
        <Input
          {...register('toCountryCode')}
          placeholder="Куда?"
          error={errors.toCountryCode?.message}
        />
        <Button disabled={!isValid} type="submit">
          Найти
        </Button>
      </Flex>
    </form>
  );
};

export default SearchForm;
