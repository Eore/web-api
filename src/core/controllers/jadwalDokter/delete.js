let pull = require("../../method/pull");
let ObjectID = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  pull({
    modelNameSource: "dokter",
    field: "jadwal",
    where: { _id: ObjectID(req.params.id_dokter) },
    wherePull: { _id: ObjectID(req.params.id_jadwal) }
  })
    .then(() => res.status(200).json("deleted"))
    .catch(() => next("delete failed"));
};
