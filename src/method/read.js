let db = require("../libs/database");

module.exports = modelName => {
  return db(modelName).then(col => col.find().toArray());
};
