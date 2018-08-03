let db = require("../libs/database");

module.exports = ({ modelSourceName, modelToPush, field, where, data }) => {
  return db(modelSourceName).then(col => {
    let newData = new modelToPush(data);
    return col.updateOne(where, { $push: { [field]: newData.data } });
  });
};
