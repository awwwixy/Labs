"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7];

const dropMany = (arr, ...values) => {
  values.forEach(value => {
    const idx = arr.indexOf(value);
    if (idx !== -1) {
      arr.splice(idx, 1);
    }
  });
};

dropMany(numbers, 5, 1, 6);
console.log(numbers);

module.exports = { dropMany };
