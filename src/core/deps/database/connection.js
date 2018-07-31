let mongodb = require("mongodb").MongoClient;

let env = process.env;
let dbPort = env.DB_PORT || 27017;
let dbHost = env.DB_HOST || `localhost`;
let dbName = env.DB_NAME || `zweb`;
let user =
  env.DB_USERNAME !== undefined ? `${env.DB_USERNAME}:${env.DB_PASSWORD}@` : ``;

let connection = () => {
  return mongodb
    .connect(
      `mongodb://${user + dbHost}:${dbPort}/${dbName}`,
      { useNewUrlParser: true }
    )
    .then(con => con.db(dbName))
    .catch(err => {
      console.error("Database connection error");
    });
};

module.exports = connection;
