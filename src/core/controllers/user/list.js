let db = require("../../../deps/database");

module.exports = (req, res, next) => {
  db("user")
    .then(col => col.find().toArray())
    .then(list => {
      list = list.map(el => {
        let { password, ...rest } = el;
        return rest;
      });
      res.status(200).json(list);
    })
    .catch(() => next("get list error"));
};
