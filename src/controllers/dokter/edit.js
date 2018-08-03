let Dokter = require("../../models/dokter");
let update = require("../../method/update");
let ObjectID = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  update("dokter", Dokter, { _id: ObjectID(req.params.id_dokter) }, req.body)
    .then(() => res.status(200).json(req.body))
    .catch(() => next("edit dokter failed"));
};
