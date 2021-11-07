/*
  NUMBERS

  - JS only has one type for numbers, where other languages have different types
  for different numbers.

  - It will not store an infinitely precise number (like any other programming
  language). 

  - We have pretty standard math operators.

  - JS follows the standard order of operations.

  - NaN is a number that represents something that is not a number.

  - We also have infinity, negative infinity, zero and negative 0 (don't think about that too hard).

  - NaN isn't an error, but it does indicate that something with potentially be hard for JS to handle.
*/

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function remainder(a, b) {
  return a % b
}

function power(a, b) {
  return a ** b
}

function nanExample() {
  return 0 / 0 // returns NaN
}

function infinityExample() {
  return 1 / 0 // returns Infinity
}
