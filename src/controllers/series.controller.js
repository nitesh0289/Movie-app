const database = require("../db");

async function getSeries(req, res) {
  const db = await database;

  try {
    const series = await db
      .collection("series")
      .find(
        {},
        {
          projection: {
            _id: 0,
            thumbnailImage: 1,
            title: 1,
            launchDate: 1,
            episodes: 1,
            duration: 1,
          },
          sort: {
            launchDate: -1,
          },
          limit: 6,
        }
      )
      .toArray();
    res.status(200).send(series);
  } catch (error) {
    console.log({ error });
  }
}

module.exports = { getSeries };
