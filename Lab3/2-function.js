function generateKey(length, characters) {
  let result = '';
  for (let i = 0; i < length; i++) {
    const index = random(0, characters.length - 1);
    result += characters[index];
  }
  return result;
}

const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(16, chars)); 
