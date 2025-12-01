"use strict";

function compose(...fns) {
  return function (value) {
    let result = value;
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
}

// приклад
const add2 = x => x + 2;
const mult3 = x => x * 3;

const combined = compose(mult3, add2);
console.log(combined(5)); // 21
