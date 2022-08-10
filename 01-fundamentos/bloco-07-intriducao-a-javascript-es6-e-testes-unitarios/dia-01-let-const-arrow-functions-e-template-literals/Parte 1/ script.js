// Exercício 1
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (oddsAndEvens) => {
  for (let index1 = 0; index1 < oddsAndEvens.length; index1 += 1) {
    for (let index = 0; index < oddsAndEvens.length; index += 1) {
      if (oddsAndEvens[index] > oddsAndEvens[index + 1]) {
        aux = oddsAndEvens[index + 1]
        oddsAndEvens[index + 1] = oddsAndEvens[index]
        oddsAndEvens[index] = aux
      }    
    }   
  }
  return oddsAndEvens
};

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);

//Bônus 
console.log(`Os números ${oddsAndEvens.sort((a, b) => a -b)} se encontram ordenados de forma crescente!`);