let db = require("../libs/database");

module.exports = (modelName, model, where, data) => {
  return db(modelName).then(col => {
    let newData = new model(data);
    return col.updateOne(where, { $set: newData.data });
  });
};
