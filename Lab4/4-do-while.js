const sum4 = (...args) => {
  if (!args.length) return 0;
  let total = 0;
  let i = 0;
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  return total;
};
console.log(sum4(10, 20, 30));
