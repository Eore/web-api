let Dokter = require("../../models/dokter");
let del = require("../../method/delete");
let ObjectID = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  del("dokter", { _id: ObjectID(req.params.id_dokter) })
    .then(() => res.status(200).json("deleted"))
    .catch(() => next("edit dokter failed"));
};
