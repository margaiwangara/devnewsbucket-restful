const { getLaravelData } = require("../scraper");
const db = require("../models");
const moment = require("moment");

exports.laravelScraper = async (req, res, next) => {
  try {
    const data = await getLaravelData();

    data.forEach(async value => {
      try {
        const datePublished = moment(value.date, "MMMM Do YYYY").format();

        const updatedData = await db.Article.findOneAndUpdate(
          { link: value.link },
          { ...value, datePublished: datePublished },
          { upsert: true }
        );

        return res.status(200).json(updatedData);
      } catch (error) {
        return next({
          status: 500,
          message: "Oops! Something went wrong"
        });
      }
    });
  } catch (error) {
    return next({
      status: 500,
      message: "Oops! Something went wrong"
    });
  }
};

// Logic - Combination of data from all the language sites into one array
