let db = require("../libs/database");

module.exports = ({ modelNameSource, field, where, wherePull }) => {
  return db(modelNameSource).then(col => {
    return col.updateOne(where, { $pull: { [field]: wherePull } });
  });
};
