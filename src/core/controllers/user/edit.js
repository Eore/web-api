let User = require("../../models/user");
let db = require("../../../deps/database");

module.exports = (req, res, next) => {
  db("user")
    .then(col => {
      let newUserData = new User(req.body);
      return col.updateOne({ username: req.params.username }, newUserData.data);
    })
    .then(list => res.status(201).json(list))
    .catch(() => next("get list error"));
};
