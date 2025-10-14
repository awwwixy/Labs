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
