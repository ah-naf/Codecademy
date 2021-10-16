const { quotes } = require("./data");

const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const findByName = (arr, name) => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr.filter(item => {
    return item.person === name;
  })
}

const addQuery = (quote, person) => {
  quotes.push({quote,person})
}

module.exports = {
  getRandomElement,
  findByName,
  addQuery
};
