let Dokter = require("../../models/dokter");
let db = require("../../../deps/database");

module.exports = (req, res, next) => {
  let newDokter = new Dokter(req.body);
  if (newDokter.data)
    db("dokter")
      .then(col => col.insert(newDokter.data))
      .then(() => res.status(201).json(req.body))
      .catch(() => next("add user failed"));
};
