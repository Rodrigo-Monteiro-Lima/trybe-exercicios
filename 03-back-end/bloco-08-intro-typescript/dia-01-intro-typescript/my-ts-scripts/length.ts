import readline from 'readline-sync';

interface IUnits {
  [key: string]: number;
}

const units: IUnits = {
  km: 1000,
  hm: 100,
  dam: 10,
  m: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001,
}

const convert = (value: number, baseUnit: string, conversionUnit: string) => (units[baseUnit] / units[conversionUnit]) * value;

// console.log(convert(1, 'km', 'm'));

function exec() {
  const value = readline.questionFloat('Digite o valor para ser convertido ');
  const bUnit = readline.question('Escolha a unidade base ');
  const cUnit = readline.question('Escolha a unidade de conversão ');
  const result = convert(value, bUnit, cUnit);
  const message = `${value}${bUnit} é igual a ${result}${cUnit}`;
  console.log(message);
}

exec();