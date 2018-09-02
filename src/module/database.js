let mongodb = require("mongodb").MongoClient;

let env = process.env;
let dbPort = env.DB_PORT || 27017;
let dbHost = env.DB_HOST || `localhost`;
let dbName = env.DB_NAME || `zweb`;
let user =
  env.DB_USERNAME !== undefined ? `${env.DB_USERNAME}:${env.DB_PASSWORD}@` : ``;

var dbConnection;

exports.connect = () => {
  return mongodb
    .connect(
      `mongodb://${user + dbHost}:${dbPort}/${dbName}`,
      { useNewUrlParser: true }
    )
    .then(con => (dbConnection = con))
    .catch(() => console.error("Koneksi ke database gagal"));
};

exports.connection = collection =>
  Promise.resolve(dbConnection.db(dbName).collection(collection));
