const db = require("../../models");
const moment = require("moment");
const { laravelScraper } = require("../../handlers/scraper");

exports.createData = async(req, res, next) => {
  try {
    const data = await laravelScraper();

    data.forEach(value => {
      const { date } = value;
      const updatedDate = moment(
        date,
        "MMMM Do YYYY"
      ).format();

      let updatedData = await db.Article.findOneAndUpdate({ link: value.link}, { ...value, datePublished: updatedDate}, { upsert: true});
      res.status(200).json(updatedData);
    });
  } catch (error) {
    next({
      status: 500,
      message: "Oops! Something went wrong"
    });
  }
}