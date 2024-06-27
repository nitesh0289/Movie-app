const database = require("../db");

async function getMovies(req, res) {
  const db = await database;

  try {
    const movies = await db.collection("movies").find({}).limit(2).toArray();
    console.log({ movies });
    res.status(200).send(movies);
  } catch (error) {
    console.log({ error });
  }
}

module.exports = { getMovies };
