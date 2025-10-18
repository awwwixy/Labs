const plusObj = (val) => {
    val.n = val.n + 2;
};

const data = { n: 5 };
plusObj(data);
console.dir(data);
