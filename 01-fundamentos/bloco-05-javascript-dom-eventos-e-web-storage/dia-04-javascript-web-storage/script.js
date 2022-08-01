let select = document.querySelector('#bgColor');
let bgColor = document.querySelector('article');
select.addEventListener('click', function() {
  let newBgColor = document.getElementById('bgColor').value;
  
  if (bgColor.style.backgroundColor !== newBgColor) {
    bgColor.style.backgroundColor = newBgColor;    
  }
  //console.log(newBgColor);
  localStorage.setItem('configBg', newBgColor);
  //console.log(localStorage.getItem('configBd'));
})

let text = document.getElementsByClassName('text');
let selectColor = document.querySelector('#ftColor');
selectColor.addEventListener('click', function() {
  let newFtColor = document.getElementById('ftColor').value;

  for (let index = 0; index < text.length; index += 1) {
    if (text[index].style.color !== newFtColor) {
      text[index].style.color = newFtColor;
    }  
  }
  localStorage.setItem('configColor', newFtColor);
})

let selectFontSize = document.querySelector('#ftSize');
selectFontSize.addEventListener('click', function() {
  let newFtSize = document.getElementById('ftSize').value;

  for (let index = 0; index < text.length; index += 1) {
    if (text[index].style.fontSize !== newFtSize) {
      text[index].style.fontSize = newFtSize;
    }  
  }
  localStorage.setItem('configFS', newFtSize);
})

let selectLineHeight = document.querySelector('#lnHeight');
selectLineHeight.addEventListener('click', function() {
  let newLnHeight = document.getElementById('lnHeight').value;

  for (let index = 0; index < text.length; index += 1) {
    if (text[index].style.lineHeight !== newLnHeight) {
      text[index].style.lineHeight = newLnHeight;
    }  
  }
  localStorage.setItem('configLH', newLnHeight);
})

let selectFontFamily = document.querySelector('#ftFamily');
selectFontFamily.addEventListener('click', function() {
  let newFtFamily = document.getElementById('ftFamily').value;

  for (let index = 0; index < text.length; index += 1) {
    if (text[index].style.fontFamily !== newFtFamily) {
      text[index].style.fontFamily = newFtFamily;
    }  
  }
  localStorage.setItem('configFF', newFtFamily);
})

function initial() {
  let previousBgColor = localStorage.getItem('configBg');
  bgColor.style.backgroundColor = previousBgColor;

  let previousColor = localStorage.getItem('configColor');
  for (let index = 0; index < text.length; index += 1) {    
      text[index].style.color = previousColor;     
  }

  let previousFtSize = localStorage.getItem('configFS');
  for (let index = 0; index < text.length; index += 1) {   
      text[index].style.fontSize = previousFtSize;      
  }
  
  let previousLineHeight = localStorage.getItem('configLH');
  for (let index = 0; index < text.length; index += 1) {
      text[index].style.lineHeight = previousLineHeight;
  }

  let previousFontFamily = localStorage.getItem('configFF');
  for (let index = 0; index < text.length; index += 1) {
      text[index].style.fontFamily = previousFontFamily;
  }
}

window.onload = function() {
  initial();
};





