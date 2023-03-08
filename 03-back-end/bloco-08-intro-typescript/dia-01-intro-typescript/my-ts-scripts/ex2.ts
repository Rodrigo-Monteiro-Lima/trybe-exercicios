
const emailInput: string = 'email@email.com';

const validateEmailFormat = (param: string): boolean => {
  var re = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput))