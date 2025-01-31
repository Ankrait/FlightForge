import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorMessage from '..';

describe('ErrorMessage', () => {
 it('renders error message', () => {
   render(<ErrorMessage/>);
   expect(screen.getByText('Неизвестная ошибка. Пожалуйста, попробуйте позже.')).toBeInTheDocument();
 });

 it('renders error message with custom text', () => {
   render(<ErrorMessage error={new Error('Test error')} text="Custom error message" />);
   expect(screen.getByText('Произошла ошибка при загрузке данных. Пожалуйста, попробуйте снова.')).toBeInTheDocument();
 });
});