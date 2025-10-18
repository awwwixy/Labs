const array = [true, 'hello', 5, 12, -200, false, false, 'word', null, {}, 'test', 0, undefined, [1, 2, 3]];

const typeCount = {};

for (const item of array) {
    const type = typeof item;
    if (!(type in typeCount)) {
        typeCount[type] = 0;
    }
    typeCount[type]++;
}

console.log(typeCount);
