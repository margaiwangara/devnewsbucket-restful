const express = require("express");
const scraper = require("./scraper");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Coding is fun"
  });
});

app.get("/laravel", (req, res) => {
  scraper.getLaravelData().then(data => res.json(data)).catch(error => console.log(error));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));