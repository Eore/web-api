let del = require("../../methods/delete");
let ObjectID = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  let id_info = req.params.id_info;
  del("info", { _id: ObjectID(id_info) })
    .then(() => res.status(200).json("deleted"))
    .catch(() => next("delete info failed"));
};
