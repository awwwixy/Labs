"use strict";

function pipe(value, ...fns) {
  let result = value;
  for (let fn of fns) {
    result = fn(result);
  }
  return result;
}

const add2 = x => x + 2;
const mult3 = x => x * 3;

console.log(pipe(5, add2, mult3)); // 21
