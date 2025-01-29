import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from '..';

test('text renders on Loading component', () => {
  render(<Loading />);

  const frontElementText = screen.getByText(/Загрузка/i);
  
  expect(frontElementText).toBeInTheDocument();
});