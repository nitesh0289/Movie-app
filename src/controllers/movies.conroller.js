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
            releaseDate: 1,
          },
          sort: {
            releaseDate: -1,
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

async function getRecommendedMovies(req, res) {
  const db = await database;

  try {
    const filter = { voteAverage: { $gte: 8.0 } };
    const movies = await db
      .collection("movies")
      .find(filter, {
        projection: {
          _id: 0,
          thumbnailImage: 1,
          videoSrc: 1,
          title: 1,
          duration: 1,
          popularity: 1,
        },
        sort: {
          popularity: -1,
        },
        limit: 12,
      })
      .toArray();
    res.status(200).send(movies);
  } catch (error) {
    console.log({ error });
  }
}

module.exports = { getMovies, getRecommendedMovies };
