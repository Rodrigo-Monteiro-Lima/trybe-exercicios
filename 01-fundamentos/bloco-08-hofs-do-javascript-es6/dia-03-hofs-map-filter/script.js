const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//Ex 1 

function formatedBookNames(arr) {
  // escreva seu código aqui
  return arr.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);
}

console.log(formatedBookNames(books));

//Ex 2
function nameAndAge(arr) {
  // escreva seu código aqui
  const result = arr.map((element) => {
    const obj = {};
    obj.age = (element.releaseYear - element.author.birthYear)
    obj.author = element.author.name
    return obj
  })
  return result.sort((a, b) => a.age - b.age);
}

console.log(nameAndAge(books));

//Ex 3
function fantasyOrScienceFiction(arr) {
  // escreva seu código aqui
  return arr.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');
}

console.log(fantasyOrScienceFiction(books));

//Ex 4
function oldBooksOrdered(arr) {
  // escreva seu código aqui
  return arr.filter((element) => (2022 - element.releaseYear) >= 60).sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(oldBooksOrdered(books));

//Ex 5
function fantasyOrScienceFiction(arr) {
  return arr.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica').map((element) => element.author.name).sort();
}

console.log(fantasyOrScienceFiction(books));

//Ex 6
function oldBooks(arr) {
  // escreva seu código aqui
  return arr.filter((element) => (2022 - element.releaseYear) >= 60).map((element) => element.name).sort();
}

console.log(oldBooks(books));

//Ex 7
function authorWith3DotsOnName(arr) {
  // escreva seu código aqui
  return arr.find((element) => element.author.name[1] === '.' && element.author.name[4] === '.' && element.author.name[7] === '.').name;
}
console.log(authorWith3DotsOnName(books));
