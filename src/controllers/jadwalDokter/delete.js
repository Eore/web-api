let pull = require("../../methods/pull");
let ObjectID = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  let id_dokter = req.params.id_dokter;
  let id_jadwal = req.params.id_jadwal;
  pull({
    modelNameSource: "dokter",
    field: "jadwal",
    where: { _id: ObjectID(id_dokter) },
    wherePull: { _id: ObjectID(id_jadwal) }
  })
    .then(() => res.status(200).json("deleted"))
    .catch(() => next("delete failed"));
};
