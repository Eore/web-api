let JadwalDokter = require("../../models/jadwalDokter");
let push = require("../../method/push");
let ObjectID = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  let newJadwal = new JadwalDokter(req.body);
  push({
    modelSourceName: "dokter",
    modelToPush: JadwalDokter,
    field: "jadwal",
    where: { _id: ObjectID(req.params.id_dokter) },
    data: newJadwal.data
  })
    .then(() => res.status(201).json(req.body))
    .catch(err => {
      console.log(err);
      next("add jadwal failed");
    });
};
