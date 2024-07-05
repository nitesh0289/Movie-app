const database = require("../db");

async function getMovies(req, res) {
  const db = await database;

  try {
    const movies = await db
      .collection("movies")
      .find(
        {},
        {
          projection: {
            _id: 0,
            thumbnailImage: 1,
            videoSrc: 1,
            title: 1,
            duration: 1,
          },
          sort: {
            launchDate: -1,
          },
          limit: 6,
        }
      )
      .toArray();
    res.status(200).send(movies);
  } catch (error) {
    console.log({ error });
  }
}

module.exports = { getMovies };
