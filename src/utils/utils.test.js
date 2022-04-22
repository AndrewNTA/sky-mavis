import formatCurrencyPrice from './formatCurrencyPrice';
import isEmpty from './isEmpty';

test('should return the price with correct format 12,345', () => {
  expect(formatCurrencyPrice(12345)).toBe('12,345');
});

test('should return the price with correct format 789', () => {
  expect(formatCurrencyPrice(789)).toBe('789');
});

test('should return true when input is null', () => {
  expect(isEmpty(null)).toBeTruthy();
});

test('should return true when input is empty object', () => {
  expect(isEmpty({})).toBeTruthy();
});

test('should return true when input is empty array', () => {
  expect(isEmpty([])).toBeTruthy();
});

test('should return true when input is empty string', () => {
  expect(isEmpty('')).toBeTruthy();
});
test('should return false when input is valid string', () => {
  expect(isEmpty('string')).toBeFalsy();
});