"use strict";

function seq(...fns) {
  return function(value) {
    let result = value;
    for (let fn of fns) {
      result = fn(result);
    }
    return result;
  };
}

console.log(seq(x => x + 7, x => x * 2)(5)); // 17
console.log(seq(x => x * 2, x => x + 7)(5)); // 24
console.log(seq(x => x + 1, x => x - 2, x => x * 3, x => x - 4)(7)); // 3
