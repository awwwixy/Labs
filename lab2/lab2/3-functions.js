function average(a, b) {      // середнє арифметичне
  return (a + b) / 2;
}

function square(x) {          // квадрат 
  return x * x;
}

function cube(x) {            // куб 
  return x * x * x;
}
function calculate() {        // створює масив середніх між квадратом і кубом
  const array = [];
  for (let i = 0; i <= 9; i++) {
    const s = square(i);
    const c = cube(i);
    array.push(average(s, c));
  }
  return array;
}
console.log(average(2, 9));
console.log(square(9));
console.log(cube(9));
console.log(calculate());
