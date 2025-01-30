import { api } from '..';

import { HotelDetail } from './index.types';

export const hotelsApi = api.injectEndpoints({
  endpoints: builder => ({
    getHotels: builder.query<HotelDetail[], { location: string, checkIn: string, checkOut: string, currency: string, limit: number }>({
      query: ({location, checkIn, checkOut, currency, limit}) => ({
        url: '',
        method: 'GET',
        params: {
          _url: `http://engine.hotellook.com/api/v2/cache.json?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&currency=${currency}&limit=${limit}`
        },
      }),
    }),
  }),
});

export const { useGetHotelsQuery } = hotelsApi;