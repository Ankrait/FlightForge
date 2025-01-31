import {
  handleDepartureDateEndChange,
  handleDepartureDateStartChange,
  handleReturnDateEndChange,
  handleReturnDateStartChange,
  validateDepartureDateEnd,
  validateDepartureDateStart,
  validateReturnDateEnd,
  validateReturnDateStart,
} from '../filtersLogics';

import '@testing-library/jest-dom';

describe('validateDepartureDateStart', () => {
  it('should return error if departureDateEnd is less than value', () => {
    const filters = { departureDateEnd: '2022-01-01' };
    const result = validateDepartureDateStart('2022-01-02', filters);
    expect(result.error).toBe('Некорректная дата');
  });

  it('should return error if returnDateStart is less than value', () => {
    const filters = { returnDateStart: '2022-01-01' };
    const result = validateDepartureDateStart('2022-01-02', filters);
    expect(result.error).toBe('Некорректная дата');
  });

  it('should return error if returnDateEnd is less than value', () => {
    const filters = { returnDateEnd: '2022-01-01' };
    const result = validateDepartureDateStart('2022-01-02', filters);
    expect(result.error).toBe('Некорректная дата');
  });

  it('should return no error if all dates are greater than value', () => {
    const filters = {
      departureDateEnd: '2022-01-02',
      returnDateStart: '2022-01-02',
      returnDateEnd: '2022-01-02',
    };
    const result = validateDepartureDateStart('2022-01-01', filters);
    expect(result.error).toBe('');
  });
});

describe('validateDepartureDateEnd', () => {
  it('should return error if departureDateStart is greater than value', () => {
    const filters = { departureDateStart: '2022-01-02' };
    const result = validateDepartureDateEnd('2022-01-01', filters);
    expect(result.error).toBe('Некорректная дата');
  });

  it('should return error if returnDateStart is greater than value', () => {
    const filters = { returnDateStart: '2022-01-02' };
    const result = validateDepartureDateEnd('2022-01-13', filters);
    expect(result.error).toBe('Некорректная дата');
  });

  it('should return error if returnDateEnd is greater than value', () => {
    const filters = { returnDateEnd: '2021-01-02' };
    const result = validateDepartureDateEnd('2022-01-01', filters);
    expect(result.error).toBe('Некорректная дата');
  });

  it('should return no error if all dates are less than value', () => {
    const filters = {
      departureDateStart: '2022-01-01',
      returnDateStart: '2022-01-03',
      returnDateEnd: '2022-01-04',
    };
    const result = validateDepartureDateEnd('2022-01-02', filters);
    expect(result.error).toBe('');
  });
});

describe('validateReturnDateStart', () => {
  it('should return error if departureDateStart is greater than value', () => {
    const filters = { departureDateStart: '2022-01-02' };
    const result = validateReturnDateStart('2022-01-01', filters);
    expect(result.error).toBe('Некорректная дата');
  });

  it('should return error if departureDateEnd is greater than value', () => {
    const filters = { departureDateEnd: '2022-01-02' };
    const result = validateReturnDateStart('2022-01-01', filters);
    expect(result.error).toBe('Некорректная дата');
  });

  it('should return error if returnDateEnd is less than value', () => {
    const filters = { returnDateEnd: '2022-01-01' };
    const result = validateReturnDateStart('2022-01-02', filters);
    expect(result.error).toBe('Некорректная дата');
  });

  it('should return no error if all dates are less than value', () => {
    const filters = {
      departureDateStart: '2022-01-01',
      departureDateEnd: '2022-01-01',
      returnDateEnd: '2022-01-02',
    };
    const result = validateReturnDateStart('2022-01-01', filters);
    expect(result.error).toBe('');
  });
});

describe('validateReturnDateEnd', () => {
  it('should return error if departureDateStart is greater than value', () => {
    const filters = { departureDateStart: '2022-01-02' };
    const result = validateReturnDateEnd('2022-01-01', filters);
    expect(result.error).toBe('Некорректная дата');
  });

  it('should return error if departureDateEnd is greater than value', () => {
    const filters = { departureDateEnd: '2022-01-02' };
    const result = validateReturnDateEnd('2022-01-01', filters);
    expect(result.error).toBe('Некорректная дата');
  });

  it('should return error if returnDateStart is greater than value', () => {
    const filters = { returnDateStart: '2022-01-02' };
    const result = validateReturnDateEnd('2022-01-01', filters);
    expect(result.error).toBe('Некорректная дата');
  });

  it('should return no error if all dates are less than value', () => {
    const filters = {
      departureDateStart: '2022-01-01',
      departureDateEnd: '2022-01-01',
      returnDateStart: '2022-01-01',
    };
    const result = validateReturnDateEnd('2022-01-02', filters);
    expect(result.error).toBe('');
  });
});

describe('handleDepartureDateStartChange', () => {
  it('should call setFilters and setValidationErrors with correct arguments', () => {
    const e = { target: { value: '2022-01-01' } };
    const filters = { departureDateEnd: '2022-01-02' };
    const setFilters = jest.fn();
    const setValidationErrors = jest.fn();

    handleDepartureDateStartChange(e, filters, setFilters, setValidationErrors);

    expect(setFilters).toHaveBeenCalledWith({
      ...filters,
      departureDateStart: '2022-01-01',
    });
    expect(setValidationErrors).toHaveBeenCalled();
  });
});

describe('handleDepartureDateEndChange', () => {
  it('should call setFilters and setValidationErrors with correct arguments', () => {
    const e = { target: { value: '2022-01-02' } };
    const filters = { departureDateStart: '2022-01-01' };
    const setFilters = jest.fn();
    const setValidationErrors = jest.fn();

    handleDepartureDateEndChange(e, filters, setFilters, setValidationErrors);

    expect(setFilters).toHaveBeenCalledWith({
      ...filters,
      departureDateEnd: '2022-01-02',
    });
    expect(setValidationErrors).toHaveBeenCalled();
  });
});

describe('handleReturnDateStartChange', () => {
  it('should call setFilters and setValidationErrors with correct arguments', () => {
    const e = { target: { value: '2022-01-01' } };
    const filters = { returnDateEnd: '2022-01-02' };
    const setFilters = jest.fn();
    const setValidationErrors = jest.fn();

    handleReturnDateStartChange(e, filters, setFilters, setValidationErrors);

    expect(setFilters).toHaveBeenCalledWith({
      ...filters,
      returnDateStart: '2022-01-01',
    });
    expect(setValidationErrors).toHaveBeenCalled();
  });
});

describe('handleReturnDateEndChange', () => {
  it('should call setFilters and setValidationErrors with correct arguments', () => {
    const e = { target: { value: '2022-01-02' } };
    const filters = { returnDateStart: '2022-01-01' };
    const setFilters = jest.fn();
    const setValidationErrors = jest.fn();

    handleReturnDateEndChange(e, filters, setFilters, setValidationErrors);

    expect(setFilters).toHaveBeenCalledWith({ ...filters, returnDateEnd: '2022-01-02' });
    expect(setValidationErrors).toHaveBeenCalled();
  });
});
