const custo = 10;
const venda = 200;
let imposto = 0.20;
let valorCustoTotal = custo + (custo * imposto);
let lucro = venda - valorCustoTotal;
let lucroTotal;

if (custo >= 0 && venda >= 0) {
 lucroTotal = 1000 * lucro;
 console.log("O lucro na venda de 1000 produtos é de R$ " + lucroTotal) 
} else {
 console.log("Valores de entrada inválidos");
}