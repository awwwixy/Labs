function incObj(num) {
    num.n = num.n + 2;
}

const obj = { n: 5 };
incObj(obj);
console.dir(obj);
