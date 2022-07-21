let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

//Exercício 1 

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//Exercício 2

for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];
}

console.log(soma);

//Exercício 3 

for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];
}

console.log(soma / numbers.length);

//Exercício 4

if (soma / numbers.length > 20) {
  console.log("Valor maior do que 20");
} else {
  console.log('Valor menor ou igual a 20');
}

//Exercício 5

let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) { 

  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }

}

console.log(maiorNumero);

//Exercício 6

let impar = [];
let quantidade = 0;

for (let index = 0; index < numbers.length; index += 1) { 

  if (numbers[index] % 2 != 0) {
    impar.push(numbers[index])
    quantidade += 1;
  }

}

if (quantidade !== 0) {
  console.log(impar);
} else {
  console.log("Nenhum valor ímpar encontrado");
}

//Exercício 7

let menorNumero = 100;

for (let index = 0; index < numbers.length; index += 1) {

  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }

}

console.log(menorNumero);

//Exercício 8

let array = [];

for (let index = 1; index <= 25; index += 1) {
  array.push(index)
}

console.log(array);

//Exercício 9

let array = [];
let array2 = [];

for (let index = 1; index <= 25; index += 1) {
  array.push(index)
}

for (let indice = 0; indice <= array.length - 1; indice += 1) {
  array2.push(array[indice] / 2);
}

console.log(array2);

//Bônus 1

let aux;

for (let index = 0; index < numbers.length; index += 1){
  for (let indice = 0; indice < numbers.length -(index - 1); indice += 1) {
    if (numbers[indice] > numbers[indice + 1]) {
      aux = numbers[indice + 1];
      numbers[indice + 1] = numbers[indice];
      numbers[indice] = aux;
    }
  }
}
console.log(numbers);

//Bônus 2

let aux;

for (let index = 0; index < numbers.length; index += 1){
  for (let indice = 0; indice < numbers.length -(index - 1); indice += 1) {
    if (numbers[indice] < numbers[indice + 1]) {
      aux = numbers[indice + 1];
      numbers[indice + 1] = numbers[indice];
      numbers[indice] = aux;
    }
  }
}
console.log(numbers);

//Bônus 3 

let numbersMulplicado = [];

for (let index = 0; index < numbers.length; index += 1) {  
  if (index + 1 == numbers.length) {
    numbersMulplicado.push((numbers[index] * 2))
  } else {
    numbersMulplicado.push((numbers[index] * numbers[index + 1]));
  }
}

console.log(numbersMulplicado);


