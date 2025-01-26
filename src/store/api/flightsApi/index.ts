import { api } from '..';

import { ApiResponse, FlightDataResponse } from './index.types';

const URL = 'https://api.travelpayouts.com/v1/city-directions?origin=KZN&currency=rub';
const URL2 =  'https://api.travelpayouts.com/v2/prices/week-matrix?show_to_affiliates=true&currency=rub';

export const flightsApi = api.injectEndpoints({
  endpoints: builder => ({
    getFlights: builder.query<ApiResponse, void>({
      query: () => ({
        url: '',
        method: 'GET',
        params: {
          _url: `${URL}`
        },
      }),
    }),
    getCityToCityFlights: builder.query<FlightDataResponse, { origin: string; destination: string }>({
      query: ({ origin, destination }) => ({
        url: '',
        method: 'GET',
        params: {
          _url: `${URL2 + `&origin=${origin}&destination=${destination}`}`
        },
      }),
    }),
  }),
});

export const { useGetFlightsQuery, useGetCityToCityFlightsQuery } = flightsApi;