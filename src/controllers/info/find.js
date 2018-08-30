let find = require("../../methods/find");
let ObjectID = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  let id_info = req.params.id_info;
  find("info", { _id: ObjectID(id_info) })
    .then(info => res.status(200).json(info))
    .catch(() => next("get info failed"));
};
