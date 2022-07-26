//Bônus 1
/*function changeNumeralsIntoNumbers(numerals) {
let algarismos = {
  I: '1',
  IV: '4',
  V: '5',
  IX: '9',
  X: '10',
  XL: '40',
  L: '50',
  XC: '90',
  C: '100',
  CD: '400',
  D: '500',
  CM: '900',
  M: '1000',
}

let numeral = '';
let numeros = [];
let resultado = 0;

  for (let index in numerals) {

    numeral = numerals[index];
    
    for (let key in algarismos) {
      if (numeral == key) {
        numeros.push(parseInt(algarismos[key]));
      }
    }
    numeral = '';
  }
  console.log(numeros);
  for (let index2 = 0; index2 < numeros.length; index2 += 1) {
    if (numeros.length === 1) {
      resultado = numeros[index2];
    } else{
        if ( numeros[index2] < numeros[index2 + 1]) {
        resultado = numeros[index2 + 1] - numeros[index2];
      } else {
        resultado = numeros[index2] + numeros[index2 + 1];
      }
    }
  }
  console.log(resultado);
}
changeNumeralsIntoNumbers('MMM');*/

//Bônus 2

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva', 'Romã', 'Romã',
];
let fruta;
let cesta = {};
let valor = [];
let message = 'Sua cesta tem: ';

for (let index = 0; index < basket.length; index += 1) { 
  let count = 0;
  fruta = basket[index];
  for (let indice = 0; indice < basket.length; indice += 1) {
    if (fruta === basket[indice]) {
      count +=1
    }
    if (basket[index] !== cesta[basket[index]]) {
    cesta[basket[index]] = count;
    }    
    
  }
  
}

for (let key in cesta) { 
  valor.push(cesta[key] + ' ' + key)
}

for (let index in valor) {
  if (valor[index].substr(0,2) > 1) {
    if (index == valor.length - 1) {
      message = message +  valor[index] + 's. '; 
    } else {
      message = message +  valor[index] + 's, ';
    }
  } else {
    if (index == valor.length - 1) {
      message = message +  valor[index] + '. ';
    } else {
      message = message +  valor[index] + ', ';

    }
  }
}

console.log(message);
