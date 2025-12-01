"use strict";

const array = function () {
  const data = [];

  const get = function (i) {
    return data[i];
  };

  get.push = function (value) {
    data.push(value);
    return get;
  };

  get.pop = function () {
    return data.pop();
  };

  return get;
};

const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop());
console.log(arr.pop()); 

console.log(arr.pop()); 
