import readline from 'readline-sync';

interface IMass {
  [key: string]: number;
}

const massUnits: IMass = {
  kg: 1000,
  hg: 100,
  dag: 10,
  g: 1,
  dg: 0.1,
  cg: 0.01,
  mg: 0.001,
}

const convertMass = (value: number, baseUnit: string, conversionUnit: string) => (massUnits[baseUnit] / massUnits[conversionUnit]) * value;

// console.log(convertMass(1, 'kg', 'g'));

function exec() {
  const value = readline.questionFloat('Digite o valor para ser convertido ');
  const bUnit = readline.question('Escolha a unidade base ');
  const cUnit = readline.question('Escolha a unidade de conversão ');
  const result = convertMass(value, bUnit, cUnit);
  const message = `${value}${bUnit} é igual a ${result}${cUnit}`;
  console.log(message);
}

exec();
