const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/devnewsbucket", {
  keepAlive: true,
  useMongoClient: true
});