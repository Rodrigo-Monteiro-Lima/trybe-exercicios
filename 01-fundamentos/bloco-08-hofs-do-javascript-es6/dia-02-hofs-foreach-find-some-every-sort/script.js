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
function authorBornIn1947(arr) {
  return arr.find((element) => element.author.birthYear === 1947).author.name;
}

console.log(authorBornIn1947(books));

//Ex 2
function smallerName(arr) {
  let nameBook = arr[0].name;
  // escreva aqui o seu código
    arr.forEach((element) => {
      if (element.name.length < nameBook.length) {
        nameBook = element.name;
      }
    });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName(books));

//Ex 3 
function getNamedBook(arr) {
  return arr.find((element) => element.name.length === 26);
}

console.log(getNamedBook(books));

//Ex 4 
function booksOrderedByReleaseYearDesc(arr) {
  // escreva aqui seu código
  return arr.sort((a,b) => b.releaseYear - a.releaseYear);
}

console.log(booksOrderedByReleaseYearDesc(books));

//Ex 5
function everyoneWasBornOnSecXX(arr) {
  // escreva seu código aqui
  return arr.every((element) => element.author.birthYear > 1900 && element.author.birthYear < 2001 )
}

console.log(everyoneWasBornOnSecXX(books));

//Ex 6
function someBookWasReleaseOnThe80s(arr) {
  // escreva seu código aqui
  return arr.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990)
}

console.log(someBookWasReleaseOnThe80s(books));

//Ex 7
function authorUnique(arr) {
  // escreva seu código aqui
  return arr.every((element) => !arr.some((element2) => (element2.author.birthYear === element.author.birthYear) && (element2.author.name !== element.author.name)));
}

console.log(authorUnique(books));