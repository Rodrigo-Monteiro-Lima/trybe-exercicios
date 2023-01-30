const readline = require("readline-sync");

const fibonnaci = () => {
  const arr = [0, 1];
  const n = readline.questionInt("Number of terms?");
  if (n <= 0) {
    console.log("Ops, number of terms must be more than 0")
  } else {
    for (let index = 0; index < n - 1; index += 1) {
      const nextNumber = arr[index] + arr[index + 1];
      arr.push(nextNumber);
    }
    arr.shift();
    console.log(arr.join(", "));
  }
}

fibonnaci();
