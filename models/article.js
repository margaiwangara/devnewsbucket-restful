const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  link:{
    type: String,
    required: true,
    unique: true
  },
  summary:{
    type: String,
    required: true
  }, 
  content:{
    type: String,
    required: true
  },
  datePublished:{
    type: Date,
    required: true
  },
  dateCreated:{
    type: Date,
    default: Date.now
  }
});

const Article = mongoose.model("Articles", articleSchema);

// article: image, date, link, title, summarycontent, fullcontent, languageID, authorID
// author: name, gravatar
// language: name
module.exports = Article;