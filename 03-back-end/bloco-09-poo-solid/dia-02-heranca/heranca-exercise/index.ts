class Person {
  #name: string;
  #birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.#name = name;
    this.#birthDate = birthDate;
  }

  #nameValidation = (name: string): void => {
    if (name.length < 3) throw new Error('Name should have at least 3 characters');
  }

  #birthValidation = (date: Date): void => {
    if (date.getTime() > new Date().getTime()) throw new Error('Birthday should not be a date in the future');
    if (new Date().getFullYear() - date.getFullYear() > 120) throw new Error('Age cant be higher than 120 years');
  }

  get name(): string {
    return this.#name
  }

  set name(value: string) {
    this.#nameValidation(value);
    this.#name = value;
  }

  get birthDate(): Date {
    return this.#birthDate
  }

  set birthDate(value: Date) {
    this.#birthValidation(value)
    this.#birthDate = value;
  }
}

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));
luiza.name = 'João'
luiza.birthDate = new Date('1993-03-18');
console.log(luiza.name, luiza.birthDate)

class Student extends Person {
  #enrollment: string;
  #examsGrades: number[] = [];
  #assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.#enrollment = this.#generateEnrollment()
  }

  #generateEnrollment = (): string => {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }

  get enrollment(): string {
    return this.#enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('enrollment should have at least 16 characters');
    this.#enrollment = value
  }

  get examsGrades(): number[] {
    return this.#examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('The student can have a maximum of 4 examsGrades');
    this.#examsGrades = value
  }


  get assignmentsGrades(): number[] {
    return this.#assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length > 2) throw new Error('The student can have a maximum of 2 assignmentsGrades');
    this.#assignmentsGrades = value
  }

  somarNotas = (): number => {
    return [...this.#examsGrades, ...this.#assignmentsGrades].reduce((acc, curr) => acc + curr);
  }

  media = (): number => {
    const notas = [...this.#examsGrades, ...this.#assignmentsGrades];
    return +(this.somarNotas() / notas.length).toFixed(2);
  }
}

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
lucas.assignmentsGrades = [50, 45];
tamires.assignmentsGrades = [47, 42];

console.log(carolina.enrollment);
console.log(lucas.assignmentsGrades);
console.log(jessica.birthDate);
console.log(tamires.name);
console.log(fernando.examsGrades, lucas.media(), lucas.somarNotas());

interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
}


class Subject {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  get name(): string {
    return this.#name
  }

  set name(name: string) {
    this.#nameValidation(name);
    this.#name = name;
  }

  #nameValidation = (name: string): void => {
    if (name.length < 3) throw new Error('Name should have at least 3 characters');
  }
}

const math = new Subject('Matemática');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');
story.name = 'Ed. Física'
console.log(math.name);
console.log(story.name);
// philosophy.name = 'a'
console.log(philosophy.name);

class Teacher extends Person implements Employee {
  #subject: Subject;
  #registration: string;
  #salary: number;
  #admissionDate: Date;

  constructor(name: string, birhtDate: Date, salary: number, subject: Subject) {
    super(name, birhtDate);
    this.#subject = subject;
    this.#admissionDate = new Date();
    this.#registration = this.generateRegistration();
    this.#salary = salary;
  }

  get subject(): Subject {
    return this.#subject;
  }

  set subject(value: Subject) {
    this.#subject = value;
  }

  get registration(): string {
    return this.#registration;
  }

  set registration(value: string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

    this.#registration = value;
  }

  get salary(): number {
    return this.#salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo.');

    this.#salary = value;
  }

  get admissionDate(): Date {
    return this.#admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this.#admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}


const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);

console.log(marta.admissionDate, marta.birthDate, marta.name, marta.registration, marta.salary, marta.subject.name,)