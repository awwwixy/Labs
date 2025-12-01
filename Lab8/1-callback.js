'use strict';

const iterate = (obj, callback) => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      callback(key, value, obj);
    }
  }
};

const data = { a: 1, b: 2, c: 3 };

iterate(data, (key, value) => {
  console.log({ key, value });
});

module.exports = { iterate };
