let db = require("../libs/database");

module.exports = (modelName, keyword) => {
  return db(modelName).then(col => col.deleteOne(keyword));
};
