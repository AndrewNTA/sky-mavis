import formatCurrencyPrice from './formatCurrencyPrice';

test('should return the price with correct format 12,345', () => {
  expect(formatCurrencyPrice(12345)).toBe('12,345');
});

test('should return the price with correct format 789', () => {
  expect(formatCurrencyPrice(789)).toBe('789');
});