'use strict';

const store = (x) => {
  return () => x;
};

const read = store(5);
const result = read();

console.log(result);

module.exports = { store };
