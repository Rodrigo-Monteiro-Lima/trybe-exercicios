const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Ex 1
/*const addShift = (lesson, shift, time) => {
  lesson[shift] = time;
};
addShift(lesson2, 'turno', 'noite');
console.log(lesson2);

// Ex 2
const listKeys = (obj) => {
  console.log(Object.keys(obj));
}
listKeys(lesson3);

// Ex 3
const objSize = (obj) => {
  console.log(`O tamanho do objeto é ${Object.keys(obj).length}`);
}
objSize(lesson3);

// Ex 4
const listValues = (obj) => {
  console.log(Object.values(obj));
}
listValues(lesson3);

// Ex 5*/
const allLessons = Object.assign({},{ lesson1, lesson2, lesson3 });
//console.log(allLessons);

// Ex 6 
/*const getNumberOfStudents = (obj) => {
  // essa será a função responsável pela lógica e ela receberá um objeto como parâmetro.
  const objects = Object.keys(obj)
  for (const key in objects) {
    people += obj[objects[key]].numeroEstudantes;
  }
  return people;
};
console.log(getNumberOfStudents(allLessons));

// Ex 7
const getValueByNumber = (obj, index) => {
  const arr = Object.values(obj)[index];
  return arr;
}
console.log(getValueByNumber(lesson1, 0));

// Ex 8
const verifyPair = (obj, key, value) => {
  const entries = obj;
  if (entries[key] === value) {
    return true;
  } return false;
}
console.log(verifyPair(lesson3, 'turno', 'Maria Clara'));
console.log(verifyPair(lesson3, 'materia', 'Matemática'));

// Bônus 1
const getNumberOfMathStudents = (obj) => {
  let people = 0;
  const objects = Object.keys(obj)
  for (const key in objects) {
    if (obj[objects[key]].materia === 'Matemática')
    people += obj[objects[key]].numeroEstudantes;
  }
  return people;
};
console.log(getNumberOfMathStudents(allLessons));*/

// Bônus 2
const createReport = (obj, name) => {
  let people = 0;
  const result = {};
  const aulas = [];
  const objects = Object.keys(obj)
  for (const key in objects) {
    if (obj[objects[key]].professor === name) {
      people += obj[objects[key]].numeroEstudantes;
      aulas.push(obj[objects[key]].materia);
    }
  }
  result.professor = name;
  result.aulas = aulas;
  result.estudantes = people;
  return result;
};
console.log(createReport(allLessons, 'Carlos'))



