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
            releaseDate: 1,
            episodes: 1,
            duration: 1,
            popularity: 1,
          },
          sort: {
            releaseDate: -1,
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

async function getRecentSeries(req, res) {
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
            seasons: 1,
            videoSrc: 1,
            releaseDate: 1,
            episodes: 1,
          },
          sort: {
            episodes: -1,
            releaseDate: -1,
          },
          limit: 12,
        }
      )
      .toArray();

    res.status(200).send(series);
  } catch (error) {
    console.log({ error });
  }
}

async function getRecommendedSeries(req, res) {
  const db = await database;

  try {
    const filter = { voteAverage: { $gte: 8.0 } };
    const series = await db
      .collection("series")
      .find(filter, {
        projection: {
          _id: 0,
          thumbnailImage: 1,
          title: 1,
          seasons: 1,
          videoSrc: 1,
          duration: 1,
          popularity: 1,
          releaseDate: 1,
        },
        sort: {
          popularity: -1,
        },
        limit: 12,
      })
      .toArray();

    console.log({ series });
    res.status(200).send(series);
  } catch (error) {
    console.log({ error });
  }
}

module.exports = { getSeries, getRecentSeries, getRecommendedSeries };
