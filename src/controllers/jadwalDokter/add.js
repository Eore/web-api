let JadwalDokter = require("../../models/jadwalDokter");
let push = require("../../methods/push");
let ObjectID = require("mongodb").ObjectID;
let validator = require("../../libs/validator/validator");
let jadwalDokterPattern = require("../../libs/validator/pattern/jadwalDokter");

module.exports = (req, res, next) => {
  let data = req.body;
  let id_dokter = req.params.id_dokter;
  if (validator(jadwalDokterPattern, data)) {
    let newJadwal = new JadwalDokter(data);
    push({
      modelSourceName: "dokter",
      modelToPush: JadwalDokter,
      field: "jadwal",
      where: { _id: ObjectID(id_dokter) },
      data: newJadwal.data
    })
      .then(() => res.status(201).json(data))
      .catch(err => {
        console.log(err);
        next("add jadwal failed");
      });
  } else {
    res.status(400).json("wrong input");
  }
};
