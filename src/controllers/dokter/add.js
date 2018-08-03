let Dokter = require("../../models/dokter");
let insert = require("../../methods/insert");
let validator = require("../../libs/validator/validator");
let dokterPattern = require("../../libs/validator/pattern/dokter");

module.exports = (req, res, next) => {
  let data = req.body;
  validator(dokterPattern, data)
    ? insert("dokter", Dokter, data)
        .then(() => res.status(201).json(data))
        .catch(() => next("add dokter failed"))
    : res.status(400).json("wrong input");
};
