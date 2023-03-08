import readline from 'readline-sync';

interface ICapacity {
  [key: string]: number;
}

const capacityUnit: ICapacity = {
  kl: 1000,
  hl: 100,
  dal: 10,
  l: 1,
  dl: 0.1,
  cl: 0.01,
  ml: 0.001,
}

const convertCapacity = (value: number, baseUnit: string, conversionUnit: string) => (capacityUnit[baseUnit] / capacityUnit[conversionUnit]) * value;

// console.log(convertCapacity(1, 'l', 'kl'))

function exec() {
  const value = readline.questionFloat('Digite o valor para ser convertido ');
  const bUnit = readline.question('Escolha a unidade base ');
  const cUnit = readline.question('Escolha a unidade de conversão ');
  const result = convertCapacity(value, bUnit, cUnit);
  const message = `${value}${bUnit} é igual a ${result}${cUnit}`;
  console.log(message);
}

exec();