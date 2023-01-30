const readline = require("readline-sync");

const handleBmi = (bmi) => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else if (bmi >= 30 && bmi < 35) {
    return "Obesity I"
  } else if (bmi >= 35 && bmi < 40) {
    return "Obesity II";
  }
  return "Obesity III and IV";
}

const imc = () => {
  const weight = readline.questionFloat("What's your weight in Kg?");
  const height = readline.questionFloat("What's your height in meters?");
  const bmi = (weight / Math.pow(height, 2)).toFixed(2);
  const bmiWeight = handleBmi(bmi);
  return `Your bmi is ${bmi} and you're ${bmiWeight}`;
}

console.log(imc());