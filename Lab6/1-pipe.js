"use strict";

function seq(...funcs) {
  return function(start) {
    let value = start;
    for (let f of funcs) {
      value = f(value);
    }
    return value;
  };
}

// приклади
console.log(seq(x => x + 7, x => x * 2)(5)); // 17
console.log(seq(x => x * 2, x => x + 7)(5)); // 24
console.log(seq(x => x + 1, x => x - 2, x => x * 3, x => x - 4)(7)); // 3
