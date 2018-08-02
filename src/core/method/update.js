let db = require("../../libs/database");

module.exports = (modelName, where, data) => {
  return db(modelName).then(col => {
    return col.updateOne(where, { $set: data });
  });
};
