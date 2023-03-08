const ageInput: number = 19;

const isOfLegalAge = (param: string | boolean): boolean => {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));
