function range(start, end) {  // створює масив чисел від start до end
 let array = [];
    for (let i = start; i <= end; i++)
        array.push(i);
    return array;
}
console.log(range(15, 30));

function rangeOdd(start, end) {  // масив лише непарних чисел
 let array = [];
    for (let i = start; i <= end; i++)
        if (i % 2 === 1) {
            array.push(i);
           }
    return array;
}
console.log(rangeOdd(15, 30));
