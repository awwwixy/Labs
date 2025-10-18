const items = [true, 'hi', 5, 10, -300, false, 'word', null, {}, 'test', 0];

const counts = {};
for (const el of items) {
    const type = typeof el;
    if (!(type in counts)) {
        counts[type] = 0;
    }
    counts[type]++;
}

console.log(counts);
