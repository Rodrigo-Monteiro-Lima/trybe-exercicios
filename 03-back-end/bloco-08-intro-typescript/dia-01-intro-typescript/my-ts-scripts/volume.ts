import readline from 'readline-sync';

interface IVolume {
  [key: string]: number;
}

const volume: IVolume = {
  'km³': 1000000000,
  'hm³': 1000000,
  'dam³': 1000,
  'm³': 1,
  'dm³': 0.001,
  'cm³': 0.000001,
  'mm³': 0.000000001,
}

const convertVolume = (value: number, baseUnit: string, conversionUnit: string) => (volume[baseUnit] / volume[conversionUnit]) * value;

// console.log(convertVolume(29, 'km³', 'm³'));

function exec() {
  const value = readline.questionFloat('Digite o valor para ser convertido ');
  const bUnit = readline.question('Escolha a unidade base ');
  const cUnit = readline.question('Escolha a unidade de conversão ');
  const result = convertVolume(value, bUnit, cUnit);
  const message = `${value}${bUnit} é igual a ${result}${cUnit}`;
  console.log(message);
}

exec();