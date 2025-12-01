"use strict";

function map(array, fn) {
  const result = [];
  for (let item of array) {
    result.push(fn(item));
  }
  return result;
}

const nums = [1, 2, 3, 4];
const doubled = map(nums, x => x * 2);

console.log(doubled);
