// const fetch = require('node-fetch');

const criptoList = async () => {
    const url = 'https://api.coincap.io/v2/assets';
    
    const coins = await fetch(url)
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => error.toString('Deu erro!'))   

    return coins;
}

const fetchUsdCurrencies = async () => {
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

    const usdCurrencies = await fetch(url)
    .then((response) =>response.json())
    .then((data) => data.usd)
    .catch((error) => error.toString('Deu erro!'));

    return usdCurrencies;
}

const setCoins = async () => {
    const coins = await criptoList();
    const localCoins = document.querySelector('#coins-list');
    const usdCurrencies = await fetchUsdCurrencies();

    coins.filter((element, index) => index < 20)
    .forEach((coin) => {
        const li = document.createElement('li');
        const price = Number(coin.priceUsd);
        const priceBr = price * usdCurrencies.brl;

        li.innerText = `${coin.name} (${coin.symbol}): R$${priceBr.toFixed(2)} // US$${price.toFixed(2)}`;
        localCoins.appendChild(li);
    })
}

setCoins();
