import { FiltersProps, ValidationErrors } from './index.types';

export const validateDepartureDateStart = (
  value: string,
  filters: FiltersProps['filters'],
) => {
  let error = '';

  if (
    (filters.departureDateEnd && value > filters.departureDateEnd) ||
    (filters.returnDateStart && value > filters.returnDateStart) ||
    (filters.returnDateEnd && value > filters.returnDateEnd)
  ) {
    error = 'Некорректная дата';
    return { value, error };
  }

  return { value, error };
};

export const validateDepartureDateEnd = (
  value: string,
  filters: FiltersProps['filters'],
) => {
  let error = '';

  if (
    (filters.departureDateStart && value < filters.departureDateStart) ||
    (filters.returnDateStart && value > filters.returnDateStart) ||
    (filters.returnDateEnd && value > filters.returnDateEnd)
  ) {
    error = 'Некорректная дата';
  }

  return { value, error };
};

export const validateReturnDateStart = (
  value: string,
  filters: FiltersProps['filters'],
) => {
  let error = '';

  if (
    (filters.departureDateStart && value < filters.departureDateStart) ||
    (filters.departureDateEnd && value < filters.departureDateEnd) ||
    (filters.returnDateEnd && value > filters.returnDateEnd)
  ) {
    error = 'Некорректная дата';
    return { value, error };
  }

  return { value, error };
};

export const validateReturnDateEnd = (
  value: string,
  filters: FiltersProps['filters'],
) => {
  let error = '';

  if (
    (filters.returnDateStart && value < filters.returnDateStart) ||
    (filters.departureDateStart && value < filters.departureDateStart) ||
    (filters.departureDateEnd && value < filters.departureDateEnd)
  ) {
    error = 'Некорректная дата';
    return { value, error };
  }

  return { value, error };
};

export const handleDepartureDateStartChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  filters: FiltersProps['filters'],
  setFilters: FiltersProps['setFilters'],
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>,
) => {
  const value = e.target.value;
  const { value: validatedValue, error } = validateDepartureDateStart(value, filters);
  setFilters({ ...filters, departureDateStart: validatedValue });
  setValidationErrors(prev => ({ ...prev, departureDateStart: error }));
};

// Аналогично для других обработчиков...
export const handleDepartureDateEndChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  filters: FiltersProps['filters'],
  setFilters: FiltersProps['setFilters'],
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>,
) => {
  const value = e.target.value;
  const { value: validatedValue, error } = validateDepartureDateEnd(value, filters);
  setFilters({ ...filters, departureDateEnd: validatedValue });
  setValidationErrors(prev => ({ ...prev, departureDateEnd: error }));
};

export const handleReturnDateStartChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  filters: FiltersProps['filters'],
  setFilters: FiltersProps['setFilters'],
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>,
) => {
  const value = e.target.value;
  const { value: validatedValue, error } = validateReturnDateStart(value, filters);
  setFilters({ ...filters, returnDateStart: validatedValue });
  setValidationErrors(prev => ({ ...prev, returnDateStart: error }));
};

export const handleReturnDateEndChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  filters: FiltersProps['filters'],
  setFilters: FiltersProps['setFilters'],
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>,
) => {
  const value = e.target.value;
  const { value: validatedValue, error } = validateReturnDateEnd(value, filters);
  setFilters({ ...filters, returnDateEnd: validatedValue });
  setValidationErrors(prev => ({ ...prev, returnDateEnd: error }));
};

export const handleResetFilters = (
  onResetFilters: FiltersProps['onResetFilters'],
  setFilters: FiltersProps['setFilters'],
  filters: FiltersProps['filters'],
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>,
) => {
  onResetFilters();
  setFilters({
    ...filters,
    departureDateStart: '',
    departureDateEnd: '',
    returnDateStart: '',
    returnDateEnd: '',
  });
  setValidationErrors({});
};
