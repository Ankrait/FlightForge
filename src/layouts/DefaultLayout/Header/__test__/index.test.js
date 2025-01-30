import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '..';

test('text renders on Header component', () => {
  render(
    <BrowserRouter>
        <Header />
    </BrowserRouter>
  );

  const footerElementText = screen.getByText(/Главная/i);
  expect(footerElementText).toBeInTheDocument();

  const phoneElementText = screen.getByText(/Билеты/i);
  expect(phoneElementText).toBeInTheDocument();
});