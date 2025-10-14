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
console.log(findPhoneByNameArray('Lucius Seneca'));

const phonebookHash = {        // телефонна книга
  'Marcus Aurelius': '+380445554433',
  'Gaius Octavius': '+380501112233',
  'Lucius Seneca': '+380671234567',
};

function findPhoneByName(name) { // пошук у хеш-таблиці
  return phonebookHash[name];
}
console.log(findPhoneByName('Gaius Octavius'));
