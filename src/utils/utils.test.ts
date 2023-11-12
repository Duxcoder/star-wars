import { test, expect } from 'vitest';
import { limiter, fillArray, checkNumber } from './utils';

test('limiter should limit a number within a specified range', () => {
  expect(limiter(10, 1, 5)).toBe(5);
  expect(limiter(-5, 1, 5)).toBe(1);
  expect(limiter(3, 1, 5)).toBe(3);
});

test('fillArray should create an array of a specified length filled with a given value', () => {
  expect(fillArray(3, 0)).toEqual([0, 0, 0]);
  expect(fillArray(5, 'test')).toEqual(['test', 'test', 'test', 'test', 'test']);
});

test('checkNumber should return a number or an alternative if the value is undefined', () => {
  expect(checkNumber(42, 10)).toBe(42);
  expect(checkNumber('42', 10)).toBe(42);
  expect(checkNumber(undefined, 10)).toBe(10);
  expect(checkNumber('abc', 10)).toBe(10);
});
