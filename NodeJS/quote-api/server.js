const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement, findByName, addQuery } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.get("/api/quotes", (req, res, next) => {
  if (Object.keys(req.query).length) {
    const personName = req.query.person;
    if (personName) {
      const personQuote = findByName(quotes, personName);
      res.send({ quotes: personQuote });
    } else {
      res.status(404).send();
    }
  } else {
    res.send({
      quotes: quotes,
    });
  }
});

app.get("/api/quotes/random", (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send({ quote: randomQuote });
});

app.post('/api/quotes', (req,res,next) => {
    const {quote, person} = req.query
    addQuery(quote,person)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
