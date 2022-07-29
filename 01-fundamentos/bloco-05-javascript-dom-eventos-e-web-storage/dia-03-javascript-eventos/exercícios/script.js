function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Exercício 1
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDays() {
  
  let list = document.getElementById('days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let listItem = document.createElement('li');
    listItem.innerHTML = decemberDaysList[index];
    list.appendChild(listItem);
    if (decemberDaysList[index] === 24 || decemberDaysList[index] === 31) {
      listItem.className = 'day holiday';
    } else if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18) {
      listItem.className = 'day friday';
    }  else if (decemberDaysList[index] === 25 ) {
      listItem.className = 'day holiday friday'
    } else {
      listItem.className = 'day';
    }
 }
}
createDays();

// Exercício 2
function holidayButton(str) {

  let button = document.createElement('button');
  let buttonContainer = document.getElementsByClassName('buttons-container');
  button.innerText = str;
  button.id = 'btn-holiday';
  buttonContainer[0].appendChild(button)
  
}
holidayButton('Feriados');

// Exercício 3
let holiday = document.querySelectorAll('.holiday');
let button = document.querySelector('#btn-holiday');
button.addEventListener("click", changeBackgroundColor);
let color = 'rgb(238,238,238)';
let newColor = 'lightgrey';
function changeBackgroundColor() {
 
    for (let index = 0; index < holiday.length; index += 1) {
      let day = holiday[index];            
      if (day.style.backgroundColor === newColor) {
        day.style.backgroundColor = color;
      } else {
        day.style.backgroundColor = newColor;
      }
  }  
}

// Exercício 4
function fridayButton(str) {

  let buttonFriday = document.createElement('button');
  let buttonContainer = document.getElementsByClassName('buttons-container');
  buttonFriday.innerText = str;
  buttonFriday.id = 'btn-friday';
  buttonContainer[0].appendChild(buttonFriday)
  
}
fridayButton('Sexta-feira');

// Exercício 5
let buttonFriday = document.querySelector('#btn-friday');
buttonFriday.addEventListener('click', changeTextFriday);
let text = 'Sextou';
function changeTextFriday() {

  let friday = document.querySelectorAll('.friday');
  let days = [4, 11, 18, 25];
  for (let index = 0; index < friday.length; index += 1) {
    let day = friday[index];    
    if (day.innerText !== text) {
      day.innerText = text;
    } else {
      day.innerText = days[index];  
    }
  }
}

// Exercício 6
let list = document.querySelectorAll('.days');
days.addEventListener('mouseover', mouseOver)
function mouseOver(event) { 
  event.target.style.fontSize = '25px';      
}

days.addEventListener('mouseout', mouseOut)
function mouseOut(event) { 
  event.target.style.fontSize = '20px';      
}

// Exercício 7
let myTasks = document.querySelector('.my-tasks');
function addTask (str) {

let text = document.createElement('span');
text.innerText = str;
myTasks.appendChild(text);
}
addTask('terminar esse calendário');

// Exercício 8
function addColor(str) {

  let task = document.createElement('div');
  task.className = 'task'
  task.style.backgroundColor = str;
  myTasks.appendChild(task);
}
addColor('red');

// Exercício 9
let task = document.querySelector('.task');
task.addEventListener('click', (event) => {
  if (task.className === 'task') {
    event.target.className = 'task selected'
  } else {
    event.target.className = 'task'
  }   
});

// Exercício 10
let day = document.querySelector('#days');
let taskContainer = document.querySelector('.task');
let dayColor = taskContainer.style.backgroundColor;
let taskSelected = myTasks.lastChild;
day.addEventListener('click', (event) => {
  if (taskSelected.className === 'task selected' && event.target.style.color !== dayColor) {
    event.target.style.color = dayColor;    
  } else {
    event.target.style.color = 'rgb(119,119,119)';    
  }
})

// Exercício Bônus
let input = document.querySelector('#task-input');
let buttonAdd = document.querySelector('#btn-add');
let ulList = document.getElementsByTagName('ul.task-list');
let taskList = document.getElementsByClassName('task-list');
buttonAdd.addEventListener('click', () => {  
  if (input.value === '') {
    alert('Erro, preencha a caixa de texto')
  } else {
    let item = document.createElement('li');
    let commitment = input.value
    item.innerText = commitment
    taskList[0].appendChild(item); 
  }
}
);
input.addEventListener('click', clear)
function clear() {
  input.value = '';
}

input.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    if (input.value === '') {
      alert('Erro, preencha a caixa de texto')
    } else {
      let item = document.createElement('li');
      let commitment = input.value
      item.innerText = commitment
      taskList[0].appendChild(item); 
    }
    input.value = '';
  }
})