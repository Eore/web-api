let Info = require("../../models/info");
let insert = require("../../methods/insert");

module.exports = (req, res, next) => {
  let data = req.body;
  insert("info", Info, data)
    .then(() => res.status(201).json(data))
    .catch(() => next("add user failed"));
};
