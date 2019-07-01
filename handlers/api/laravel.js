const db = require("../../models");

exports.getFeeds = async (req, res, next) => {
  try {
    const feeds = await db.Article.find({});
    return res.status(200).json(feeds);
  } catch (error) {
    return next({
      status: 404,
      message: "Not Found"
    });
  }
};

exports.getFeed = async (req, res, next) => {
  try {
    const feed = await db.Article.findOne({ _id: req.params.id });
    return res.status(200).json(feed);
  } catch (error) {
    return next({
      status: 404,
      message: "Not Found"
    });
  }
};

exports.deleteFeed = async (req, res, next) => {
  try {
    await db.Article.findOneAndDelete({ _id: req.params.id });

    return res.status(200).json({
      message: "Feed deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};
