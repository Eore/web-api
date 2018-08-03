let Dokter = require("../../models/dokter");
let del = require("../../methods/delete");
let ObjectID = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  let id_dokter = req.params.id_dokter;
  del("dokter", { _id: ObjectID(id_dokter) })
    .then(() => res.status(200).json("deleted"))
    .catch(() => next("edit dokter failed"));
};
