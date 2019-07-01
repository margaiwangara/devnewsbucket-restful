const express = require("express");
const router = express.Router({ mergeParams: true });

const { getFeeds, getFeed, deleteFeed } = require("../../handlers/api/laravel");

router.get("/", getFeeds);
router
  .route("/:id")
  .get(getFeed)
  .delete(deleteFeed);

module.exports = router;
