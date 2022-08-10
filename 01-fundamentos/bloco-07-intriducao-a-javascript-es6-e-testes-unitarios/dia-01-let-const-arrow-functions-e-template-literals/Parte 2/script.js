/*const factorial = number => {
  let aux = number;
  let result = number;
  for (let index = 0; index < number; index += 1) {
    aux -= 1;
    if (aux >= 1) {
      result = result * aux;
    }    
  }
  return result;
};
const input = factorial(5);
console.log(`Esse é o fatorial ${input}`); 

//Bônus 
const factorial = number => number > 1 ? number * factorial(number - 1): 1;
console.log(factorial(10));*/

//Exercício 2
/*const longestWord = phrase => {
  let array = phrase.split(' ');
  let biggestWord = array[0];
  for (let index = 1; index < array.length; index++) {
    if (biggestWord.length < array[index].length) {
      biggestWord = array[index]
    }
  }
  return biggestWord;
}
const word = longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');
console.log(`${word} é a maior palavra da frase!`);

//Bônus 
const longestWord = phrase => phrase.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));*/

//Exercício 4
const substituaX = (nome) => {
  const frase = 'Tryber x aqui';
  const array = frase.split(' ');
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === 'x') {
      array[index] = nome;
    }
    
  }
  return array;
  //console.log(array.join(' '));
}
const nome = substituaX('Bebeto')
//console.log(nome.join(' '));

const minhasSkills = (nome) => {
  const skills = ['Javascript', 'HTML', 'CSS']
  let resultado = `${nome.join(' ')}\nMinhas três principais habilidades são:
  ${skills[0]}
  ${skills[1]}
  ${skills[2]}`
  return resultado;
}
const skills = minhasSkills(nome);
console.log(skills);