const mongodb = require("mongodb");

async function connectDB() {
  const url = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME;
  try {
    const MongoClient = mongodb.MongoClient;
    const client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect((retryWrites = false));
    const db = client.db(dbName);
    db.makeId = makeIdFromString;
    console.log("Connected successfully to database");
    return db;
  } catch (error) {
    console.log({ error });
  }
}

function makeIdFromString(id) {
  if (id === undefined) {
    return null;
  }
  return new mongodb.ObjectId(id);
}

const movieDB = connectDB();

module.exports = movieDB;
