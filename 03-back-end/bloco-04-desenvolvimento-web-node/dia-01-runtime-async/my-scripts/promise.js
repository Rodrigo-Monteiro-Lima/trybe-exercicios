const readline = require("readline-sync");

const handleCal = async (a, b, c) => {
  const isANumber = typeof a;
  const isBNumber = typeof b;
  const isCNumber = typeof c;
  const test = [isANumber, isBNumber, isCNumber].includes('string');
  const promise = new Promise((resolve, reject) => {
    if (test) {
      return reject(new Error("Enter only numbers"));
    }
    const result = (a + b) * c;
    if (result < 50) {
      return reject(new Error("Value is too low"));
    }
    return resolve(result);
  });
  return promise;
}

const main = async () => {
  try {
    const result = await handleCal(1, 2, 3);
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
  
}

main();
