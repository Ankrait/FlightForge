import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '..';

test('text renders on Footer component', () => {
  render(<Footer />);

  const footerElementText = screen.getByText(/2025 Все права защищены/i);
  expect(footerElementText).toBeInTheDocument();

  const phoneElementText = screen.getByText(/Телефон для связи: \+1 \(555\) 987-6543/i);
  expect(phoneElementText).toBeInTheDocument();

  const supportElementText = screen.getByText(/Поддержка: flightforge@gmail.com/i);
  expect(supportElementText).toBeInTheDocument();
});