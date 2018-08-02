let find = require("../../method/find");
let ObjectID = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  find("dokter", { _id: ObjectID(req.params.id_dokter) })
    .then(dokter => res.status(200).json(dokter))
    .catch(() => next("get dokter failed"));
};
