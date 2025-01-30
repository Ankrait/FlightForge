import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FlightsList from '..';
import { useGetFlightsQuery } from '../../../../store/api/flightsApi/index';
import { useGetCitiesQuery } from '../../../../store/api/otherApi';

jest.mock('../../../../store/api/flightsApi/index', () => ({
  useGetFlightsQuery: jest.fn(),
}));

jest.mock('../../../../store/api/otherApi', () => ({
  useGetCitiesQuery: jest.fn(),
}));

describe('FlightsList Component', () => {
  it('should render loading spinner when data is loading', () => {
    
    (useGetFlightsQuery as jest.Mock).mockReturnValue({ isLoading: true });
    (useGetCitiesQuery as jest.Mock).mockReturnValue({ isLoading: true });

    render(
      <MemoryRouter>
        <FlightsList />
      </MemoryRouter>
    );

    expect(screen.getByText('Загрузка...')).toBeInTheDocument();
  });

  it('should render error message when there is an error', async () => {
    
    (useGetFlightsQuery as jest.Mock).mockReturnValue({ error: new Error('Failed to fetch flights') });
    (useGetCitiesQuery as jest.Mock).mockReturnValue({ error: new Error('Failed to fetch cities') });

    render(
      <MemoryRouter>
        <FlightsList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Произошла ошибка при загрузке данных. Пожалуйста, попробуйте снова.')).toBeInTheDocument();
    });
  });

  it('should display the flight details when data is available', async () => {
    const mockCities = [
      { code: 'NYC', name: 'New York', country_code: 'US' },
      { code: 'LON', name: 'London', country_code: 'GB' },
    ];

    const mockFlights = {
      success: true,
      data: [
        {
          flight_number: '123',
          origin: 'NYC',
          destination: 'LON',
          departure_at: '2025-01-29T10:00:00Z',
          price: 500,
        },
      ],
      currency: 'USD',
    };

    (useGetFlightsQuery as jest.Mock).mockReturnValue({ data: mockFlights });
    (useGetCitiesQuery as jest.Mock).mockReturnValue({ data: mockCities });

    render(
      <MemoryRouter>
        <FlightsList />
      </MemoryRouter>
    );

    expect(screen.getByText('New York - London')).toBeInTheDocument();
    expect(screen.getByText('от 500 $')).toBeInTheDocument();
    expect(screen.getByText('вылет 29 января')).toBeInTheDocument();
  });
})

