"use strict";

const nums = [1, 2, 3, 4, 5, 6, 7];

function removeMany(a, ...vals) {
  for (let v of vals) {
    const place = a.indexOf(v);
    if (place !== -1) {
      a.splice(place, 1);
    }
  }
}

removeMany(nums, 5, 1, 6);
console.log(nums);
