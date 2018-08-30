let mongodb = require("mongodb").MongoClient;

let env = process.env;
let dbPort = env.DB_PORT || 27017;
let dbHost = env.DB_HOST || `localhost`;
let dbName = env.DB_NAME || `zweb`;
let user =
  env.DB_USERNAME !== undefined ? `${env.DB_USERNAME}:${env.DB_PASSWORD}@` : ``;

let connection = collection => {
  return mongodb
    .connect(
      `mongodb://${user + dbHost}:${dbPort}/${dbName}`,
      { useNewUrlParser: true }
    )
    .then(con => con.db(dbName).collection(collection))
    .catch(() => console.error("Koneksi ke database gagal"));
};

module.exports = connection;
