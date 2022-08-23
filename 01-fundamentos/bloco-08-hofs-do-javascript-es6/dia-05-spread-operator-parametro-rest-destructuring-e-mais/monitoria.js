const techProducts = [
  {
    id: 1, // numérico
    name: 'computer', // string
    price: 2100, // number
  },
  {
    id: 2,
    name: 'mouse',
    price: 56,
  },
  {
    id: 3,
    name: 'monitor',
    price: 589,
  },
  {
    id: 4,
    name: 'keyboard',
    price: 78,
  },
  {
    id: 5,
    name: 'HD',
    price: 350,
  },
  {
    id: 6,
    name: 'webcam',
    price: 187,
  },
  {
    id: 7,
    name: 'mic',
    price: 69,
  },
  {
    id: 8,
    name: 'headset',
    price: 216,
  },
];
/*
* 1 - // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
* 2 - // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
* 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
* 4 - // Crie um algoritmo que dado um preço retorne todos os produtos com preços iguais 
// ex: id: 8 e quantidade: 2 preço total: 432
*/
//Ex 1
const isEven = (array) => array.filter((elemento) => elemento.id % 2 === 0).map((elemento) => elemento.name);

console.log(isEven(techProducts));

//Ex 2
const over300 = (array) => array.some((elemento) => elemento.price >= 300)

console.log(over300(techProducts));

//Ex 3
const total = (id, amount, array) => array.find((elemento) => elemento.id === id).price * amount;

console.log(total(1, 2, techProducts));

//Ex 4
const compare = (price,array) => array.filter((elemento) => elemento.price === price);

console.log(compare(78, techProducts));