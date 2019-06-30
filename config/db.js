const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/devnewsbucket", {
      keepAlive: true,
      useMongoClient: true
    });
  } catch (error) {
    console.log(error);
  }
}