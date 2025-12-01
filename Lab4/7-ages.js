"use strict";

const ages = (persons) => {
  const lifeAges = {};

  for (const personName in persons) {
    const born = persons[personName].born;
    const died = persons[personName].died;
    lifeAges[personName] = died - born;
  }

  return lifeAges;
};

const persons = {
  einstein: { born: 1879, died: 1955 },
  picasso: { born: 1881, died: 1973 },
  churchill: { born: 1874, died: 1965 },
  tesla: { born: 1856, died: 1943 },
};

console.log(ages(persons));
