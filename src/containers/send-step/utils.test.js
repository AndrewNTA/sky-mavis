import { findOption } from './utils';

test('should return null', () => {
  expect(findOption('12345', [])).toBe(null);
});

test('should return correct option', () => {
  expect(findOption('12345', [{ id: '12345'}])).toEqual({ id: '12345'});
});