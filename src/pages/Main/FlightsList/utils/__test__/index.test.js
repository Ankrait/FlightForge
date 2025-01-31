import formatDate from '..';

describe('formatDate', () => {
    it('should format a date in the correct format (day and month)', () => {
        const result = formatDate('2025-01-31');
        expect(result).toBe('31 января');

        const result2 = formatDate('2025-12-25');
        expect(result2).toBe('25 декабря');
    });

    it('should handle leap years correctly', () => {
        const result = formatDate('2024-02-29');
        expect(result).toBe('29 февраля');
    });

    it('should format the current date correctly', () => {
        const currentDate = new Date();
        const formattedCurrentDate = currentDate.toLocaleDateString('ru-RU', {
            month: 'long',
            day: 'numeric',
        });

        const result = formatDate(currentDate);
        expect(result).toBe(formattedCurrentDate);
    });
});