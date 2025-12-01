"use strict";

const arr = [2, 1, 1, 3, 2];

const unique = (array) =>
  array.filter((el, index) => array.indexOf(el) === index);

console.log(unique(arr));
