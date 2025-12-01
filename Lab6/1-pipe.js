"use strict";

const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

const pipe = (...funcs) => {
  for (const fn of funcs) {
    if (typeof fn !== "function") {
      throw new Error("All arguments must be functions");
    }
  }

  return value => {
    let result = value;
    for (const fn of funcs) {
      result = fn(result);
    }
    return result;
  };
};

const fn1 = pipe(inc, twice, cube);
console.log(fn1(5));

const fn2 = pipe(twice, inc);
console.log(fn2(7));
