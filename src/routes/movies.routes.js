const express = require("express");
const router = express.Router();

const { getMovies, getRecommendedMovies } = require("../controllers/movies.conroller");
const logger = require("../middlewares/logger");

router.get("/", logger, getMovies);
router.get("/recommended", getRecommendedMovies);

module.exports = router;
