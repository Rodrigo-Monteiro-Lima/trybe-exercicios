// Ex 1
 const employee = (name) => ({
   nomeCompleto: name,
   email: `${name.toLowerCase().split(' ').join('_')}@trybe.com`,
 });

 const newEmployees = (func) => {
   const employees = {
     id1: func('Pedro Guerra'),  //Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
     id2: func('Luiza Drumond'),  //Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
     id3: func('Carla Paiva'),  //Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
   }
   return employees;
 };

 console.log(newEmployees(employee));

//Ex 2
 const compareNumbers = (number, bet) => {
   if (number === bet) {
     return true;
   } return false;
 };

 const raffle = (number, func) => {
   const bet = (Math.floor((Math.random() * (5+1 -1)) +1));
   const result = func(number, bet);
   if (result === true) {
     return 'Parabéns você ganhou';
   } return 'Tente novamente';
 };

 console.log(raffle(3, compareNumbers));

// Ex 3
 const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
 const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

 const compareAnswers = (rightAnswers, answers) => {
   let result = 0;
   for (let index = 0; index < rightAnswers.length; index += 1) {
     if (rightAnswers[index] === answers[index]) {
       result += 1;
     } else if (rightAnswers[index] !== answers[index] && answers[index] !== 'N.A') {
       result -= 0.5;
     }
   }
   return result;
 }

 const finalGrade = (rightAnswers, answers, func) => {
   const grade = func(rightAnswers, answers);
   return grade;
 };

 console.log(finalGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

 //Bônus 1 
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };


const dragonDamage =  () => {
  const dragonStr = dragon.strength;
  const damage = (Math.floor((Math.random() * (dragonStr+1 -15)) +15));

  return damage;
}

const warriorDamage =  () => {
  const warriorDmg = (warrior.strength * warrior.weaponDmg);
  const warriorStr = warrior.strength
  const damage = (Math.floor((Math.random() * (warriorDmg+1 -warriorStr)) +warriorStr));

  return damage;
}


const mageDamage = () => {
  const min = mage.intelligence;
  const max = (min * 2);
  const mageDmg = (Math.floor((Math.random() * (max+1 -min)) +min));
  const manaValue = mage.mana;
  let count = manaValue;
  if(count > 14) {
    count -= 15;
  } else {
    count = 'Não possui mana suficiente'
  }
  const obj = {
    dano: mageDmg,
    mana: count,
  }
  return obj;
};

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorAttack = warriorDamage();
    warrior.damage = warriorAttack;
    dragon.healthPoints -= warriorAttack;
  },
  mageTurn: (mageDamage) => {
    const mageAttack = mageDamage();
    dragon.healthPoints -= mageAttack.dano;
    mage.damage = mageAttack.dano;
    mage.mana = mageAttack.mana;
  },
  dragonTurn: (dragonDamage) => {
    const dragonAttack = dragonDamage();
    mage.healthPoints -= dragonAttack;
    warrior.healthPoints -= dragonAttack;
    dragon.damage = dragonAttack;
  },
   results: () => battleMembers,
};
gameActions.warriorTurn(warriorDamage)
gameActions.mageTurn(mageDamage)
gameActions.dragonTurn(dragonDamage)
console.log(gameActions.results());

