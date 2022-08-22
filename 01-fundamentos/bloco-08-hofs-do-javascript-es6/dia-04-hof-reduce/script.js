//Ex 1
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  return arr.reduce((acc, curr) => acc.concat(curr));
}

console.log(flatten(arrays));


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

//Ex 2
function reduceNames(arr) {
  const array = arr.reduce((acc, curr) => {
    const result = acc;
    result.push(curr.author.name);
    return result;
  }, [])
  return array.join(', ');
}

console.log(reduceNames(books));

//Ex 3
function averageAge(arr) {
  const totalAge = arr.reduce((acc, curr) => acc += (curr.releaseYear - curr.author.birthYear), 0);
  return totalAge / arr.length;
}

console.log(averageAge(books));

//Ex 4
function longestNamedBook(arr) {
 return arr.reduce((acc,curr) => (acc.name.length > curr.name.length) ? acc: curr);
}

console.log(longestNamedBook(books));

//Ex 5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const result = names.reduce((acc, curr) => {
    for (let index = 0; index < curr.length; index += 1) {
      if (curr[index].toLocaleLowerCase() === 'a') {
        acc += 1;
      }      
    }
    return acc
  }, 0)
  return result;
}

console.log(containsA(names));

//Ex 6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(arr, arr1) {
  return arr.map((element, index) => (
    {
      name: element,
      average: arr1[index].reduce((acc, curr) => acc + curr) / arr1[index].length
    }
  ))
}

console.log(studentAverage(students, grades));
