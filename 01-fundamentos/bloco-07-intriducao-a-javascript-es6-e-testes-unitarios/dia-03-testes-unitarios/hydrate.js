function hydrate(str) {
    let type = /\d+/g;
    let arr = str.match(type);
    let result = 0;
  
    for (let index = 0; index < arr.length; index += 1) {
      result += parseInt(arr[index], 10);
    }
    if (result === 1) {
      return `${result} copo de água`;
    } return `${result} copos de água`;
  };

  module.exports = hydrate;