function average(a, b) {      
  return (a + b) / 2;
}

function square(x) {          
  return x * x;
}

function cube(x) {            
  return x * x * x;
}
function calculate() {        
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
