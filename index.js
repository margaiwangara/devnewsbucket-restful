const express = require("express");
const errorHandler = require("./handlers/errors");

const app = express();

// Api Routes
const laravel = require("./routes/api/laravel");
app.use("/api/laravel", laravel);

// Error Handler
app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(error);
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
