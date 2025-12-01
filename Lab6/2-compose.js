"use strict";

function array() {
  const data = [];

  function access(index) {
    if (typeof index === "number") {
      return data[index];
    }
    if (index === undefined) {
      return data.pop();
    }
  }

  access.push = function(value) {
    data.push(value);
  };

  access.pop = function() {
    return data.pop();
  };

  return access;
}

// приклад
const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0)); // first
console.log(arr(1)); // second
console.log(arr(2)); // third

console.log(arr.pop()); // third
console.log(arr.pop()); // second
console.log(arr.pop()); // first

console.log(arr.pop()); // undefined
