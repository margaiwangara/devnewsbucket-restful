const { getLaravelData } = require("../scraper");

exports.laravelScraper = async (req, res, next) => {
  try {
    const data = await getLaravelData();
    res.status(200).json(data);
    
  } catch (error) {
    next({
      status: 500,
      message: "Oops! Something went wrong"
    });
  }
}

// Logic - Combination of data from all the language sites into one array