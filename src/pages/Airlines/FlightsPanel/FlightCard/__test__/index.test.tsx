import { render, screen } from '@testing-library/react';
import React from 'react';

import FlightCard from '../index';

describe('FlightCard Component', () => {
  const mockFlight: {
    origin: string;
    destination: string;
    depart_date: string;
    return_date: string;
    gate: string;
    number_of_changes: number;
    distance: number;
    trip_class: number;
    value: number;
    found_at: string;
  } = {
    origin: 'NYC',
    destination: 'LON',
    depart_date: '2025-02-01T15:00:00Z', // UTC
    return_date: '2025-02-10T21:00:00Z', // UTC
    gate: 'Aviakassa',
    number_of_changes: 1,
    distance: 5567,
    trip_class: 1,
    value: 25000,
    found_at: '2025-01-25T13:00:00Z',
  };

  it('should render flight details correctly', () => {
    render(<FlightCard flight={mockFlight} />);

    expect(screen.getByText(/Рейс.*NYC.*→.*LON/i)).toBeInTheDocument();
    expect(screen.getByText(/NYC.*→.*LON/i)).toBeInTheDocument();

    expect(
      screen.queryByText(
        content => content.includes('Вылет:') && content.includes('01.02.2025, 18:00:00'),
      ),
    ).toBeInTheDocument();

    expect(
      screen.queryByText(
        content =>
          content.includes('Возвращение:') && content.includes('11.02.2025, 00:00:00'),
      ),
    ).toBeInTheDocument();

    expect(screen.getByText('Платформа:')).toBeInTheDocument();
    expect(screen.getByText('Aviakassa')).toBeInTheDocument();
    expect(screen.getByText('Пересадки:')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();

    expect(screen.getByText('Бизнес')).toBeInTheDocument();
    expect(screen.getByText('25000 руб.')).toBeInTheDocument();

    expect(
      screen.queryByText(
        content =>
          content.includes('Найдено:') && content.includes('25.01.2025, 16:00:00'),
      ),
    ).toBeInTheDocument();
  });
});
