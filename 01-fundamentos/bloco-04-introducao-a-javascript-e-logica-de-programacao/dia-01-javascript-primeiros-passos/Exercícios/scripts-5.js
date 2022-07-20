const a = 40;
const b = 60;
const c = 60;
let triangulo;

if (a + b + c == 180 && a > 0 && b > 0 && c > 0) {  
  console.log(true);
} else if (a + b + c != 180 && a > 0 && b > 0 && c > 0) {
  console.log(false);
} else {
  console.log("Erro");
}