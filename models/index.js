const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

mongoose.set("debug", true);
mongoose.Promise = Promise;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      keepAlive: true,
      useNewUrlParser: true,
      useFindAndModify: true,
      useCreateIndex: true
    });

    console.log("MongoDB Connected");

  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
module.exports.Article = require("./article");
module.exports.Language = require("./language");
module.exports.Author = require("./author");