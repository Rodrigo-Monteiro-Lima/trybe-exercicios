function techList(arr, str) {
  // seu código aqui
  let list = {};
  let arrOfList;
  let newArr = arr.sort();

  if (newArr.length === 0) {
    arrOfList = 'Vazio!';
  } else {
    arrOfList = [];
    for (let index = 0; index < newArr.length; index += 1) {
      list.name = str;
      list.tech = newArr[index];
      arrOfList.push(list);
      list = {};
    }
  }
  return arrOfList;
};

module.exports = techList;