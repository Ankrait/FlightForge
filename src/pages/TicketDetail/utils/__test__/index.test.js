import { calculatePricePerNight, formatDate } from '../index';

describe('calculatePricePerNight', () => {
  it('should return 0 if price is undefined', () => {
    const result = calculatePricePerNight(undefined, '2025-01-01', '2025-01-05');
    expect(result).toBe(0);
  });

  it('should return 0 if price is 0', () => {
    const result = calculatePricePerNight(0, '2025-01-01', '2025-01-05');
    expect(result).toBe(0);
  });

  it('should return the price if checkIn equals checkOut', () => {
    const result = calculatePricePerNight(100, '2025-01-01', '2025-01-01');
    expect(result).toBe(100);
  });

  it('should calculate the correct price per night when checkIn and checkOut are different', () => {
    const result = calculatePricePerNight(500, '2025-01-01', '2025-01-05');
    expect(result).toBe(125);  
  });

  it('should handle negative or 0 difference between checkIn and checkOut gracefully', () => {
    const result = calculatePricePerNight(500, '2025-01-05', '2025-01-01');
    expect(result).toBe(0);  
  });

  it('should round the price correctly when the difference in days is not a whole number', () => {
    const result = calculatePricePerNight(1000, '2025-01-01', '2025-01-03');
    expect(result).toBe(500); 
  });

  it('should return 0 if there is no valid price for the given checkIn and checkOut', () => {
    const result = calculatePricePerNight(0, '2025-01-01', '2025-01-01');
    expect(result).toBe(0);
  });
});

describe('formatDate', () => {
  it('should return the correct formatted date and time for a valid date string', () => {
    const inputDate = '2025-01-31T14:30:00';
    const result = formatDate(inputDate);

    expect(result.formattedDate).toBe('31 января 2025 г.');
    expect(result.formattedTime).toBe('14:30');
    expect(result.formattedDateYYYYMMdd).toBe('2025-01-31');
  });

  it('should correctly format a date string in YYYY-MM-DD format', () => {
    const inputDate = '2025-12-25';
    const result = formatDate(inputDate);

    expect(result.formattedDate).toBe('25 декабря 2025 г.');
    expect(result.formattedDateYYYYMMdd).toBe('2025-12-25');
  });

  it('should format current date correctly', () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const formattedTime = currentDate.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const formattedDateYYYYMMdd = currentDate.toISOString().split('T')[0];

    const result = formatDate(currentDate);

    expect(result.formattedDate).toBe(formattedDate);
    expect(result.formattedTime).toBe(formattedTime);
    expect(result.formattedDateYYYYMMdd).toBe(formattedDateYYYYMMdd);
  });

  it('should correctly format dates with single-digit months and days', () => {
    const inputDate = '2025-05-09'; // 9 мая 2025
    const result = formatDate(inputDate);

    expect(result.formattedDate).toBe('9 мая 2025 г.');
    expect(result.formattedTime).toBe('03:00');
    expect(result.formattedDateYYYYMMdd).toBe('2025-05-09');
  });

  it('should return correct formatted time for midnight', () => {
    const inputDate = '2025-01-01T00:00:00';
    const result = formatDate(inputDate);

    expect(result.formattedTime).toBe('00:00');
  });
});
