let btnClear = document.querySelector('#clear-form');
btnClear.addEventListener('click', (event) => {
  event.preventDefault();

  function clearName() {
    let name = document.querySelector('#name');
    name.value = '';
  }
  clearName();

  function clearEmail() {
    let email = document.querySelector('#email');
    email.value = '';
  }
  clearEmail();
  
  function clearRadio() {
    let radio = document.querySelectorAll('.radio');
    for (let index = 0; index < radio.length; index += 1) {
      radio[index].checked = false;      
    }
  }
  clearRadio();

  function clearTextarea() {
    let textArea = document.querySelector('#text-about-you');
    textArea.value = '';
  }
  clearTextarea();

  function clearData() {
    let data = document.querySelector('#data');
    data.value = '';
  }
  clearData();

  function clearNews() {
    let news = document.querySelector('#trybe-news');
    news.checked = false;
  }
  clearNews();

  function clearImage() {
    let image = document.querySelector('#image-term');
    image.checked = false;
  }
  clearImage();
})

function dataValidation() {
  let text = document.querySelector('#text-about-you').value.length;
  let textValidation = (text > 500);
  let name = document.querySelector('#name').value.length;
  let nameValidation = (name < 10 || name > 40);
  let email = document.querySelector('#email').value.length;
  let emailValidation = (email < 10 || email > 50);

  if (nameValidation || emailValidation || textValidation) {
    return false;
  } return true;  
}

let btnSubmit = document.querySelector('#submit-form');
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  let validation = dataValidation();

  if (validation === true) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  } else {
    alert('Dados Inválidos');
  }
})

let image = document.querySelector('#image-term');
image.addEventListener('change', () => {
  if (image.checked === true) {
    btnSubmit.disabled = false;
  }  
})


