const salario = 10000
let salarioInss = 0;
let salarioIr = 0;
let salarioLiquido = 0;

if (salario <= 1556.94) {
  salarioInss = salario - (salario * 0.08);
} else if (salario >= 1556.95 && salario <= 2594.92) {
  salarioInss = salario - (salario * 0.09);
} else if (salario >= 2594.93 && salario <= 5189.82) {
  salarioInss = salario - (salario * 0.11);
} else {
  salarioInss = salario - 570.88;
}

if (salarioInss <= 1903.98) {
  salarioIr = 0;
} else if (salarioInss >= 1903.99 && salarioInss <= 2826.65) {
  salarioIr = (salarioInss * 0.075) - 142.80;
} else if (salarioInss >= 2826.66 && salarioInss <= 3751.05) {
  salarioIr = (salarioInss * 0.15) - 354.80;
} else if (salarioInss >= 3751.06 && salarioInss <= 4664.68) {
  salarioIr = (salarioInss * 0.225) - 636.13;
} else {
  salarioIr = (salarioInss * 0.275) - 869.36;
}

salarioLiquido = salarioInss - salarioIr;

console.log("Salário é de R$ " + salarioLiquido);
