import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FrontElement from '..';

test('text renders on FrontElement component', () => {
  render(<FrontElement />);

  const frontElementText = screen.getByText(/Сервис поиска авиабилетов/i);
  
  expect(frontElementText).toBeInTheDocument();
});