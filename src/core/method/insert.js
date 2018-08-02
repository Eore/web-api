let db = require("../../libs/database");

module.exports = (modelName, model, data) => {
  let newData = new model(data);
  return newData.data
    ? db(modelName).then(col => col.insert(newData.data))
    : Promise.reject("invalid data");
};
