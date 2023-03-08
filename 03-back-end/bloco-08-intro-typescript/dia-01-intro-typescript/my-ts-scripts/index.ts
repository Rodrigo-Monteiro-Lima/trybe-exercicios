import readline from "readline-sync";

const scripts = ['area', 'capacity', 'length', 'mass'];

scripts.forEach(script => console.log(`${script}\n`))

const choice = readline.question("Escolha um dos script de conversão de unidade acima ");
console.log(choice)

require(`./${choice}`);