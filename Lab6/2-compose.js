"use strict";

const compose = (...funcs) => {
  const listeners = [];

  const run = value => {
    if (funcs.length === 0) return value;

    let current = value;

    try {
      for (let i = funcs.length - 1; i >= 0; i--) {
        current = funcs[i](current);
      }
      return current;
    } catch (err) {
      for (const l of listeners) {
        l(err);
      }
      return undefined;
    }
  };

  run.on = (type, handler) => {
    if (type === "error") {
      listeners.push(handler);
    }
  };

  return run;
};

const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

const test = compose(inc, twice, cube);
console.log(test(5));
