const sumForOf = (...args) => {
  let total = 0;
  for (const n of args) {
    total += n;
  }
  return total;
};

console.log(sumForOf(10, 20, 30)); // 60
