import { api } from '..';

import { ApiResponse } from './index.types';

const URL = 'https://api.travelpayouts.com/v1/city-directions?origin=KZN&currency=rub';

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
  }),
});

export const { useGetFlightsQuery } = flightsApi;