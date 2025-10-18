function fn() {               
  const personConst = { name: 'Marcus' };
  let personVar = { name: 'Aurelius' };
  personConst.name = 'Marcus Aurelius';
  personVar.name = 'Philosopher';
  personVar = { name: 'Emperor' };
  console.log(personConst, personVar);
}
fn();

function createUser(name, city) {  
  return { name, city };
}
console.log(createUser('Marcus Aurelius', 'Roma'));
