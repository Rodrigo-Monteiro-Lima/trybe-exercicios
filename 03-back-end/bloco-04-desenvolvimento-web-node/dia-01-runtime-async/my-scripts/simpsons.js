const fs = require('fs').promises;


const getJson = async (file = './simpsons.json') => {
  const json = await fs.readFile(file, 'utf-8');
  return JSON.parse(json);
}
// const read = async () => {
//   const json = await fs.readFile('./simpsons.json', 'utf-8');
//   const parse = JSON.parse(json);
//   const characters = parse.map(({ id, name }) => `${id} - ${name}`);
//   characters.forEach((char) => console.log(char));
// }

// read();

// const findById = async (id) => {
//   const json = await fs.readFile('./simpsons.json', 'utf-8');
//   const parse = JSON.parse(json);
//   const promise = new Promise((resolve, reject) => {
//     const result = parse.find((char) => char.id === id);
//     if (!result) {
//       reject(new Error("Char not found"));
//     } 

//     resolve(result)
//   });
//   return promise;
// }

// const doSomething = async () => {
//   const result = await findById("1");
//   console.log(result);
// };

// doSomething()

// const filterArr = async () => {
//   const arr = await getJson();
//   const newArr = arr.filter((char) => char.id !== "6" && char.id !== "10");
//   await fs.writeFile('./simpsons.json', JSON.stringify(newArr));  
// }

// filterArr();

// const newJson = async () => {
//   const arr = await getJson();
//   const newArr = arr.filter((char) => char.id < "5");
//   await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArr));
// }

// newJson();

// const addNewChar = async () => {
//   const arr = await getJson('./simpsonsFamily.json');
//   const newArr = [...arr, {"id": "5", "name": "Nelson Muntz"}];
//   await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArr));
// }

// addNewChar();

const replaceChar = async () => {
  const arr = await getJson('./simpsonsFamily.json');
  const newArr = arr.map((char) => {
    if (char.id === "5") {
      return {...char, "name": "Maggie Simpson"};
    }
    return char;
  })
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArr));
}

replaceChar();
