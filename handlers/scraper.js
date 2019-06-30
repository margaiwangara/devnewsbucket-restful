const { getLaravelData } = require("../scraper");
const db = require("../models");

exports.laravel = async (req, res, next) => {
  try {
    let data = await getLaravelData();
    
    
  } catch (error) {
    next(error);
  }
}