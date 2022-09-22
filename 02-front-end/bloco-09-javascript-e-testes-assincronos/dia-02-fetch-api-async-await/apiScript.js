//const fetch = require('node-fetch')

const API_URL = 'https://icanhazdadjoke.com/';
const fetchJoke = async () => {
  const joke = document.querySelector('#jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const requerimento = await fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      return joke.innerHTML = data.joke;
    });
  return requerimento;
};
//fetchJoke()
window.onload = () => fetchJoke();