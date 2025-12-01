'use strict';

const contract = (fn, ...types) => {
  return (...args) => {
    for (let i = 0; i < args.length && i < types.length - 1; i++) {
      const expected = types[i].name.toLowerCase();
      const actual = typeof args[i];

      if (actual !== expected) {
        throw new TypeError('Argument type mismatch');
      }
    }

    const result = fn(...args);

    const expectedResult = types[types.length - 1].name.toLowerCase();
    const actualResult = typeof result;

    if (actualResult !== expectedResult) {
      throw new TypeError('Result type mismatch');
    }

    return result;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3));

const concat = (s1, s2) => s1 + ' ' + s2;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings('Hello', 'world!'));

module.exports = { contract };
