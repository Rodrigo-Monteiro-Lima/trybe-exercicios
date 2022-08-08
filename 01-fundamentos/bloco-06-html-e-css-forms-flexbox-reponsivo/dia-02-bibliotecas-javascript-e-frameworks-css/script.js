/*function dataValidation() {
  let text = document.querySelector('#text-about-you').value.length;
  let textValidation = (text > 500);
  let name = document.querySelector('#name').value.length;
  let nameValidation = (name < 10 || name > 40);
  let email = document.querySelector('#email').value.length;
  let emailValidation = (email < 10 || email > 50);

  if (nameValidation || emailValidation || textValidation) {
    return false;
  } return true;  
}*/

let btnSubmit = document.querySelector('#submit-form');
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
})

const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Mínimo é 10 caracteres',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'Máximo é 40 caracteres',
    },
    {
      rule: 'required',
      errorMessage: 'Campo é obrigatório',
    },    
  ])
  .addField('#email', [
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Mínimo é 10 caracteres',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Máximo é 50 caracteres',
    },
    {
      rule: 'required',
      errorMessage: 'Campo é obrigatório',
    },
    {
      rule: 'email',
      errorMessage: 'Email é inválido!',
    },
  ])
  .addField('#text-about-you', [
    {
      rule: 'required',
      errorMessage: 'Campo é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'Máximo é de 500 caracteres',
    },
  ])
  .addField('#data', [
    {
      rule: 'required',
      errorMessage: 'Campo é obrigatório.',
    },
  ]);

let image = document.querySelector('#image-term');
image.addEventListener('change', () => {
  if (image.checked === true) {
    btnSubmit.disabled = false;
  }  
})

var field = document.getElementById('data');
var picker = new Pikaday({
    onSelect: function(date) {
        field.value = picker.toString();
    }
});
field.parentNode.insertBefore(picker.el, field.nextSibling);
