"use strict";

const arr = [2, 1, 1, 3, 2];

function unique(a) {
  const result = [];
  for (let x of a) {
    if (!result.includes(x)) {
      result.push(x);
    }
  }
  return result;
}

console.log(unique(arr));
