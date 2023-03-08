const peopleInput = {
  name: 'Rui',
  age: 23,
};

interface PeopleInput {
  name: string;
  age: number;
}

const createSimpleSentence = (param: PeopleInput): string => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));