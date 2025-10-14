let myName = 'Віка';          
const birthYear = 2007;

function greet(name) {        // функція привітання
  console.log(`Привіт, ${name}!`);
}

function range(start, end) {  // створює масив чисел від start до end
  const res = [];
  const step = start <= end ? 1 : -1;
  for (let i = start; step > 0 ? i <= end : i >= end; i += step) res.push(i);
  return res;
}

function rangeOdd(start, end) {  // масив лише непарних чисел
  const res = [];
  const step = start <= end ? 1 : -1;
  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    if (Math.abs(i) % 2 === 1) res.push(i);
  }
  return res;а5
}

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
  const out = [];
  for (let i = 0; i <= 9; i++) {
    const s = square(i);
    const c = cube(i);
    out.push(average(s, c));
  }
  return out;
}

function fn() {               // показує різницю між const і let для об'єктів
  const personConst = { name: 'Marcus' };
  let personVar = { name: 'Aurelius' };
  personConst.name = 'Marcus Aurelius';
  personVar.name = 'Philosopher';
  personVar = { name: 'Emperor' };
  console.log(personConst, personVar);
}

function createUser(name, city) {  // створює користувача з ім'ям і містом
  return { name, city };
}

const phonebookArray = [       // телефон
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Gaius Octavius', phone: '+380501112233' },
  { name: 'Lucius Seneca', phone: '+380671234567' },
];

function findPhoneByNameArray(name) { // пошук телефону
  for (let i = 0; i < phonebookArray.length; i++) {
    if (phonebookArray[i].name === name) return phonebookArray[i].phone;
  }
  return undefined;
}

const phonebookHash = {        // телефонна книга
  'Marcus Aurelius': '+380445554433',
  'Gaius Octavius': '+380501112233',
  'Lucius Seneca': '+380671234567',
};

function findPhoneByName(name) { // пошук у хеш-таблиці
  return phonebookHash[name];
}

// виклики функцій і перевірка
greet(myName);
console.log(range(15, 30));
console.log(rangeOdd(15, 30));
console.log(calculate());
fn();
console.log(createUser('Marcus Aurelius', 'Roma'));
console.log(findPhoneByNameArray('Lucius Seneca'));
console.log(findPhoneByName('Gaius Octavius'));
