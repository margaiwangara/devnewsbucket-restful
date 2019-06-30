const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  gravatar:{
    type: String,
    
  }
});

const Author = mongoose.model("Authors", authorSchema);

module.exports = Author;