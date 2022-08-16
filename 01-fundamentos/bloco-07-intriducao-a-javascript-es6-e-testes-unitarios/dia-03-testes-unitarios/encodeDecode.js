function encode(str) {
  const vowels = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let phraseEncoded = '';

  for (let index in str) {
    if (str[index] !== 'a' && str[index] !== 'e' && str[index] !== 'i' && str[index] !== 'o' && str[index] !== 'u') {
      phraseEncoded += str[index];
    } else {
      for (let key in vowels) {
        if (str[index] === key) {
          phraseEncoded += vowels[key];
        }
      }
    }
  }
  return phraseEncoded;
}
function decode(str) {
  // seu código aqui
  const numbers = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  let phraseDecoded = '';

  for (let index in str) {
    if (str[index] !== '1' && str[index] !== '2' && str[index] !== '3' && str[index] !== '4' && str[index] !== '5') {
      phraseDecoded += str[index];
    } else {
      for (let key in numbers) {
        if (str[index] === key) {
          phraseDecoded += numbers[key];
        }
      }
    }
  }
  return phraseDecoded;
}

module.exports = {
  encode,
  decode,
};