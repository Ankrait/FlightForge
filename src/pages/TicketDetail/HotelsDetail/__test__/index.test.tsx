import React from 'react';
import { render, screen } from '@testing-library/react';
import HotelsDetail from '..';  
import { useGetHotelsQuery } from '../../../../store/api/hotelsApi';

jest.mock('../../../../store/api/hotelsApi', () => ({
  useGetHotelsQuery: jest.fn(),
}));

jest.mock('../../../Main/Loading', () => () => <div>Loading...</div>);
jest.mock('../../../Main/ErrorMessage', () => ({ error }: { error: any }) => <div>{`Error: ${error.message}`}</div>);

describe('HotelsDetail Component', () => {
  const mockProps = {
    location: 'Moscow',
    checkIn: '2025-02-01',
    checkOut: '2025-02-07',
    currency: 'RUB',
    limit: 5,
  };

  it('should render loading spinner when data is loading', () => {
    (useGetHotelsQuery as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    render(<HotelsDetail {...mockProps} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render error message when there is an error', () => {
    const error = new Error('Failed to fetch hotels');
    (useGetHotelsQuery as jest.Mock).mockReturnValue({
      data: null,
      error,
      isLoading: false,
    });

    render(<HotelsDetail {...mockProps} />);

    expect(screen.getByText(`Error: ${error.message}`)).toBeInTheDocument();
  });

  it('should render no data message when there are no hotels', () => {
    (useGetHotelsQuery as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      isLoading: false,
    });

    render(<HotelsDetail {...mockProps} />);

    expect(screen.getByText('Нет данных об отелях в этом городе')).toBeInTheDocument();
  });

  it('should render hotel details when data is successfully fetched', async () => {
    const mockHotels = [
      {
        hotelId: 1,
        hotelName: 'Hotel One',
        stars: 5,
        priceFrom: 10000,
        priceAvg: 2000,
      },
      {
        hotelId: 2,
        hotelName: 'Hotel Two',
        stars: 4,
        priceFrom: 8000,
        priceAvg: 1500,
      },
    ];

    (useGetHotelsQuery as jest.Mock).mockReturnValue({
      data: mockHotels,
      error: null,
      isLoading: false,
    });

    render(<HotelsDetail {...mockProps} />);

    // Check if the hotel names are rendered
    expect(screen.getByText('Hotel One')).toBeInTheDocument();
    expect(screen.getByText('Hotel Two')).toBeInTheDocument();

    // Check if the stars rating is rendered
    expect(screen.getByText('⭐ 5 звезд')).toBeInTheDocument();
    expect(screen.getByText('⭐ 4 звезд')).toBeInTheDocument();

    // Check if price information is rendered correctly
    expect(screen.getByText('От 10000 ₽ за весь период / 333 ₽ за ночь')).toBeInTheDocument();
    expect(screen.getByText('От 8000 ₽ за весь период / 250 ₽ за ночь')).toBeInTheDocument();
  });
});
