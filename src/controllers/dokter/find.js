let find = require("../../methods/find");
let ObjectID = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  let id_dokter = req.params.id_dokter;
  find("dokter", { _id: ObjectID(id_dokter) })
    .then(dokter => res.status(200).json(dokter))
    .catch(() => next("get dokter failed"));
};
