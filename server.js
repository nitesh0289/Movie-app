const logger = require("./src/middlewares/logger");
const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
require("./src/db");

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.get("/", logger, (req, res) => {
  res.send("Hello LPU students. Good Morning LPU");
});

const moviesRouter = require("./src/routes/movies.routes");
const seriesRouter = require("./src/routes/series.routes");

app.use("/api/movies", moviesRouter);
app.use("/api/series", seriesRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
