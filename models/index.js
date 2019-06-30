const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect(db, {
  keepAlive: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true
});

module.exports.Article = require("./article");
module.exports.Language = require("./language");
module.exports.Author = require("./author");