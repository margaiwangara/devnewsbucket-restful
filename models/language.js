const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    unique: true
  }
});

const Language = mongoose.model("Languages", languageSchema);

module.exports = Language;