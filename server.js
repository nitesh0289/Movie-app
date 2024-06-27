const logger = require("./src/middlewares/logger");
const express = require("express");
const app = express();

require("dotenv").config();
require("./src/db");

app.get("/", logger, (req, res) => {
  res.send("Hello LPU students. Good Morning LPU");
});

const moviesRouter = require("./src/routes/movies.routes");

app.use("/api/movies", moviesRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
