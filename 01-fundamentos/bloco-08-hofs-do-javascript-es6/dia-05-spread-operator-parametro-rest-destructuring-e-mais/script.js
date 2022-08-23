//Ex 
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
});

//Ex 2
const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};

console.log(sum(4, 5, 6));

//Ex 3
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = ({name, age, likes, nationality}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex)); 
console.log(personLikes(gunnar));

//Ex 4

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (arr) => arr.filter(({ nationality, bornIn }) => nationality === 'Australian' && bornIn > 1900 && bornIn < 2001);

console.log(filterPeople(people));

// Ex 5
const myList = [5, 2, 3];
const [first, second, third] = myList;

const swap = (arr) => [third, second, first];

console.log(swap(myList));

// Ex 6
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([carro, marca, ano]) => ({
  carro,
  marca,
  ano,
});

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));

//Ex 7
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({length, measurementUnit, name}) => `${name} is ${length} ${measurementUnit} long`;

console.log(shipLength(ships[0]));
console.log(shipLength(ships[1])); 
console.log(shipLength(ships[2]));

//Ex 8
const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;

console.log(greet('John')) 
console.log(greet('John', 'Good morning')) 
console.log(greet('Isabela', 'Oi')) 

//Ex 9
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const {spring, summer, autumn, winter} = yearSeasons;
const yearMonths = [...spring,...summer,...autumn,...winter];

console.log(yearMonths);