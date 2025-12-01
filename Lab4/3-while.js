const sum3 = (...args) => {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
};
console.log(sum3(10, 20, 30));
