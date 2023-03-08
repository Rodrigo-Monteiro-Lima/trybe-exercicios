const numberList: Array<number> = [10, 5, 18, 2, 8, 23];

const sortInput = (param: number[]) => {
  return param.sort(function (a, b) { return a - b });
};

console.log(sortInput(numberList));