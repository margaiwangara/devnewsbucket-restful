const express = require("express");
const scraper = require("./scraper");
const errorHandler = require("./handlers/errors");
const connectDB = require("./models/index");

const app = express();

// Connect DB
connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "Coding is fun"
  });
});

app.get("/laravel", (req, res) => {
  scraper
    .getLaravelData()
    .then(data => res.json(data))
    .catch(error => console.log(error));
});

app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(error);
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
