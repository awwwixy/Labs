"use strict";

const a1 = [7, -2, 10, 5, 0];
const a2 = [0, 10];

function difference(a, b) {
  const out = [];
  for (let x of a) {
    if (!b.includes(x)) {
      out.push(x);
    }
  }
  return out;
}

console.log(difference(a1, a2));

