const express = require("express");
const router = express.Router();

const {
  getSeries,
  getRecentSeries,
  getRecommendedSeries,
} = require("../controllers/series.controller");

router.get("/", getSeries);
router.get("/recent", getRecentSeries);
router.get("/recommended", getRecommendedSeries);

module.exports = router;
