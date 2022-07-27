//Exercício 1

function palindromeCheck(word) {
    let invertedWord = ''

  for (let index = word.length - 1; index >= 0; index -= 1) {
    invertedWord += word[index];
  }

  if (word === invertedWord){
    console.log(true);
  } else {
    console.log(false);
  }
  
  
}

palindromeCheck('ele');

//Exercício 2

function heigherNumberIndex(numbers) {
  let heigherNumber = 0;
  let heigherIndex = 0;

  for (let index in numbers) {
    if (numbers[index] > heigherNumber) {
      heigherNumber = numbers[index];
      heigherIndex = index;
    }
  }
  //return heigher;
  console.log(heigherIndex);
}

heigherNumberIndex([2, 3, 6, 7, 10, 1]);

//Exercício 3

function smallestNumberIndex(numbers) {
  let smallestNumber = numbers[0];
  let smallestIndex = 0;

  for (let index in numbers) {
    if (numbers[index] < smallestNumber) {
      smallestNumber = numbers[index];
      smallestIndex = index;
    }
  }
  //return smallestIndex;
  console.log(smallestIndex);
}

smallestNumberIndex([2, 4, 6, 7, 10, 0, -3]);

//Exercício 4

function biggerName(name) {

  let biggerName = name[0];
  let biggerNumberOfCharacters = 0;

  for (let nome in name) {
    for (let char in name[nome]) {
      if (char > biggerNumberOfCharacters) {
        biggerNumberOfCharacters = char;
        biggerName = name[nome];
      }
    }

  }
  console.log(biggerName);
}

biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
);

//Exercício 5

function moreRepetiveNumber(numbers) {
let moreRepetiveNumber = numbers[0]
let biggestRepeatCount = 0;

  for (let index in numbers) {
    let repeatCount = 0;
    for (let index2 in numbers) {
      if (index === index2) {
        repeatCount += 1;
      }
    }
    if (repeatCount > biggestRepeatCount) {
      biggestRepeatCount = repeatCount;
      moreRepetiveNumber = numbers[index];
    }
    repeatCount = 0;
  }
  console.log(moreRepetiveNumber);
}

moreRepetiveNumber([2, 3, 2, 5, 8, 2, 3]);


//Exercício 6

function sumOfAllNumbersUntilNumber(number) {
  let sum = 0;

  for (let index = 1; index <= number; index += 1) {
    sum += index
  }

  console.log(sum);
}

sumOfAllNumbersUntilNumber(5);

//Exercício 7

function checkEndOfTheWord(word, ending) {
let word1 = '';
let word2 = '';

  for (let index = 0; index < ending.length; index += 1) {
    word1 += ending[(ending.length - 1) - index];    
  } 
  for (let index2 = 0; index2 < ending.length; index2 += 1) {
    word2 += word[(word.length - 1) - index2];
  }
  if ( word1 === word2) {
    console.log(true);
  } else {
    console.log(false);
  } 
}
checkEndOfTheWord('trybe', 'be');