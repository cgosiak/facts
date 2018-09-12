const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const quotes = require('./quotes');
app.use(express.json());

function randomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

app.get('/random', (req, res) => {
    res.status(200).send(randomQuote());
});

app.listen(port, () => {
   console.log(`Caleb Gosiak Facts Listening on Port ${port}`);
});