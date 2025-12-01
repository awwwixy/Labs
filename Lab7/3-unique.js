"use strict";

const data = [2, 1, 1, 3, 2];

function makeUnique(arr) {
  return Array.from(new Set(arr));
}

console.log(makeUnique(data));

module.exports = { makeUnique };
