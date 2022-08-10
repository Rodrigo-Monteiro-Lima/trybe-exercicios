const btn = document.querySelector('#btnClick');
let clickCount = 0;
let p = document.querySelector('#amount');
btn.addEventListener('click', () => {p.innerHTML = clickCount += 1;})