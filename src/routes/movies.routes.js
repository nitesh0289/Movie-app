const express = require("express");
const router = express.Router();

const { getMovies } = require("../controllers/movies.conroller");

router.get("/", getMovies);

module.exports = router;
