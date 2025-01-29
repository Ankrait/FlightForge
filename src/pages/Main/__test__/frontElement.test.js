import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FrontElement from '../FrontElement';

test('text renders on Main component', () => {
  render(<FrontElement />);

  const frontElementText = screen.getByText(/Сервис поиска авиабилетов/i);
  
  expect(frontElementText).toBeInTheDocument();
});