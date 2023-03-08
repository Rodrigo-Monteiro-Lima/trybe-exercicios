import readline from 'readline-sync';

interface IUnits2 {
  [key: string]: number;
}

const units2: IUnits2 = {
  'km²': 1000000,
  'hm²': 10000,
  'dam²': 100,
  'm²': 1,
  'dm²': 0.01,
  'cm²': 0.0001,
  'mm²': 0.000001,
}

const convertArea = (value: number, baseUnit: string, conversionUnit: string) => (units2[baseUnit] / units2[conversionUnit]) * value;

// console.log(convertArea(1, 'mm²', 'km²'));

function exec() {
  const value = readline.questionFloat('Digite o valor para ser convertido ');
  const bUnit = readline.question('Escolha a unidade base ');
  const cUnit = readline.question('Escolha a unidade de conversão ');
  const result = convertArea(value, bUnit, cUnit);
  const message = `${value}${bUnit} é igual a ${result}${cUnit}`;
  console.log(message);
}

exec();