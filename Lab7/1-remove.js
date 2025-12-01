"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7];

function removeElement(a, value) {
  const i = a.indexOf(value);
  if (i !== -1) {
    a.splice(i, 1);
  }
}

removeElement(arr, 5);
console.log(arr);
