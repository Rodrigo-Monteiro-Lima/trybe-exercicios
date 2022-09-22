// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// }

// fetchJoke();

const getCrypto = async () => {
  const url = 'https://api.coincap.io/v2/assets'

    const requirement = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => console.log(`Problema encontrado. ${error}`));

  return requirement
};
getCrypto();

const list = document.querySelector('#crypto-list');
const tenFirsts = async () => {
  const coins = await getCrypto(); 
coins.filter((element, index) => index < 10).forEach((item) => {
  const li = document.createElement('li');
  const value = Number(item.priceUsd);
  li.innerText = `${item.name} (${item.symbol}): $ ${value.toFixed(2)}`;
  list.appendChild(li);
  });
};
tenFirsts();

const listBr = document.querySelector('#list-rs');
const brValue = async () => {
  const coins = await getCrypto();
  coins.filter((element, index) => index < 10).forEach((item) => {
  const li = document.createElement('li');
  const value = Number(item.priceUsd) * 5.20;
  li.innerText = `${item.name} (${item.symbol}): R$ ${value.toFixed(2)}`;
  listBr.appendChild(li);
  });
};
brValue();