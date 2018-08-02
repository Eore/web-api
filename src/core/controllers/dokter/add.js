let Dokter = require("../../models/dokter");
let insert = require("../../method/insert");

module.exports = (req, res, next) => {
  insert("dokter", Dokter, req.body)
    .then(() => res.status(201).json(req.body))
    .catch(() => next("add dokter failed"));
};
