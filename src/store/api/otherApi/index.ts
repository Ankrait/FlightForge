import { api } from '..';

import { IAirport, ICity, ICountry } from './index.types';

const URL = 'https://api.travelpayouts.com/data/ru';

export const otherApi = api.injectEndpoints({
  endpoints: builder => ({
    getCountries: builder.query<ICountry[], void>({
      query: () => ({
        url: '',
        method: 'GET',
        params: {
          _url: `${URL}/countries.json`,
        },
      }),
    }),
    getCities: builder.query<ICity[], void>({
      query: () => ({
        url: '',
        method: 'GET',
        params: {
          _url: `${URL}/cities.json`,
        },
      }),
    }),
    getAirports: builder.query<IAirport[], void>({
      query: () => ({
        url: '',
        method: 'GET',
        params: {
          _url: `${URL}/airports.json`,
        },
      }),
    }),
  }),
});

export const { useGetAirportsQuery, useGetCitiesQuery, useGetCountriesQuery } = otherApi;
