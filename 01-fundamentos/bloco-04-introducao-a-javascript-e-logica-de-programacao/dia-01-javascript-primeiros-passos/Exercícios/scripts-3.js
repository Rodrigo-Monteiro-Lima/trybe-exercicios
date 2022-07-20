const a = 15;
const b =13;
const c = 10;

if (a > b && a > c) {
  console.log("O maior número dos três é " + a); 
} else if (b > a && b > c) {
  console.log("O maior número dos três é " + b); 
} else if (c > a && c > b) {
  console.log("O maior número dos três é " + c);  
} else {
  console.log("Os três são iguais"); 
}