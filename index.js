const express = require("express");
const scraper = require("./scraper");
const errorHandler = require("./handlers/errors");

const app = express();

// Api Routes

// Error Handler
app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(error);
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
