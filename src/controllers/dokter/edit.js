let Dokter = require("../../models/dokter");
let update = require("../../methods/update");
let ObjectID = require("mongodb").ObjectID;
let validator = require("../../libs/validator/validator");
let dokterPattern = require("../../libs/validator/pattern/dokter");

module.exports = (req, res, next) => {
  let data = req.body;
  let id_dokter = req.params.id_dokter;
  validator(dokterPattern, data, false)
    ? update("dokter", Dokter, { _id: ObjectID(id_dokter) }, data)
        .then(() => res.status(200).json(data))
        .catch(() => next("edit dokter failed"))
    : res.status(400).json("wrong input");
};
