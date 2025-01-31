import { render, screen } from '@testing-library/react';
import React from 'react';

import SearchInput from '../index';

// Мокаем данные городов
const mockCities = [
  {
    code: 'NYC',
    name: 'New York',
    name_translations: { en: 'New York' },
    country_code: 'US',
  },
  {
    code: 'LON',
    name: 'London',
    name_translations: { en: 'London' },
    country_code: 'GB',
  },
  {
    code: 'PAR',
    name: 'Paris',
    name_translations: { en: 'Paris' },
    country_code: 'FR',
  },
];

describe('SearchInput Component', () => {
  const setOriginMock = jest.fn();
  jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the input field', () => {
    render(
      <SearchInput setOrigin={setOriginMock} cities={mockCities} placeholder="Откуда?" />,
    );

    expect(screen.getByPlaceholderText('Откуда?')).toBeInTheDocument();
  });
});
