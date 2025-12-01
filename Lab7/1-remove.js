"use strict";

const list = [1, 2, 3, 4, 5, 6, 7];

function deleteItem(arr, target) {
  const pos = arr.indexOf(target);
  if (pos >= 0) {
    arr.splice(pos, 1);
  }
}

deleteItem(list, 5);
console.log(list);

module.exports = { deleteItem };
