// @ts-nocheck

const { add, subtract, multiply, divide } = require('./scripts/calculator.js');

test('adds 1 + 2 to equal 3', () => {
 expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
 expect(subtract(5, 3)).toBe(2);
});

test('multiplies 4 * 2 to equal 8', () => {
 expect(multiply(4, 2)).toBe(8);
});

test('divides 6 by 2 to equal 3', () => {
 expect(divide(6, 2)).toBe(3);
});

test('divides 9 by 0 throws an error', () => {
 expect(() => divide(9, 0)).toThrow('Cannot divide by zero');
});