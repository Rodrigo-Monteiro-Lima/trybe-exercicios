

// // Ex 1
// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} está a ${value} ${measurementUnit} de distância do Sol`;

// const MEASUREMENT_UNIT = 'quilômetros';

// const mars = {
//   name: 'Marte',
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// const venus = {
//   name: 'Venus',
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// const jupiter = {
//   name: 'Jupiter',
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

// //Ordem vai ser A, B e C.

// //Ex 2
// const planetDistanceFromSun1 = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} está a ${value} ${measurementUnit} de distância do Sol`;

// const MEASUREMENT_UNIT1 = 'quilômetros';

// const mars1 = {
//   name: 'Marte',
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// const venus1 = {
//   name: 'Venus',
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// const jupiter1 = {
//   name: 'Jupiter',
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// console.log(planetDistanceFromSun1(mars1)); // A
// setTimeout(() => console.log(planetDistanceFromSun1(venus1)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun1(jupiter1)), 2000); // C

// //Ordem vai ser A,C e B

// //EX 3
// const getsPlanet = () => {
//   const mars = {
//     name: 'Mars',
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: 'kilometers',
//     },
//   };
//   console.log('Returned planet: ', mars);
// };

// setTimeout(() => getsPlanet(), 4000);

// //EX 4
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const sendMarsTemperature = () => {
//   setTimeout(()=> console.log(`A temperatura de Marte é: ${getMarsTemperature()} graus celsius`), messageDelay());
// }

// sendMarsTemperature();

// //Ex 5
// const messageDelay2 = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature2 = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

// const greet = (temperature) =>
//   console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// const sendMarsTemperature2 = (callback) => {
//   setTimeout(() => callback(getMarsTemperature2()), messageDelay2());
// };

// sendMarsTemperature2(temperatureInFahrenheit);

// sendMarsTemperature2(greet);

// //Ex 6
// const messageDelay3 = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature3 = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// }

// const toFahrenheit2 = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

// const temperatureInFahrenheit2 = (temperature) =>
//   console.log(`It is currently ${toFahrenheit2(temperature)}ºF at Mars`);

// const greet2 = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

//   const sendMarsTemperature3 = (callback, callbackFn) => {
//     setTimeout(() => {
//       const didOperationSucceed = Math.random() <= 0.6;
//       if (didOperationSucceed) {
//         callback(getMarsTemperature3());
//       } else {
//         callbackFn('Robot is busy');
//       }
//     }, messageDelay3()) 
//   }

// sendMarsTemperature3(temperatureInFahrenheit2, handleError);

// sendMarsTemperature3(greet2, handleError);

//Ex 7
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

//EX 8
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grama',
    ability: 'Raio Solar',
  },
  {
    name: 'Charmander',
    type: 'Fogo',
    ability: 'Lança Chamas',
  },
  {
    name: 'Squirtle',
    type: 'Água',
    ability: 'Jato de Água',
  },
];

function getPokemonDetails(selectedPokemon, callback) {
  const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

  setTimeout(() => {
    if (foundPokemon === undefined) {
    return callback(new Error('Não temos esse pokémon para você :('), null);    
    }

    const { name, type, ability } = foundPokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
    callback(null, messageFromProfOak);
  }, 2000);
}

const handlePokemonSearch = (error, message) => {
    if (message) {
    console.log(message);
  } else {
    console.log(error);
  }
};

//console.log(getPokemonDetails('Charmander', handlePokemonSearch));
// getPokemonDetails('Squirtle', handlePokemonSearch);
//getPokemonDetails('Charmander', handlePokemonSearch);
//console.log(getPokemonDetails('Mew', handlePokemonSearch));

//Ex 10
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });

//Saída '1 - beforeEach', '1 - test', '1 - afterEach', '1 - beforeEach', '2 - beforeEach', '2 - test', '2 - afterEach', '1 - afterEach'

module.exports = {
  uppercase,
  getPokemonDetails,
  handlePokemonSearch,
}