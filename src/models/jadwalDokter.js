let db = require("../libs/database");
let ObjectID = require("mongodb").ObjectID;
let validator = require("../libs/validator/validator");
let jadwalDokterPattern = require("../libs/validator/pattern/jadwalDokter");

class JadwalDokter {
  constructor({
    hari = new String(),
    mulai = new String(),
    selesai = new String()
  }) {
    let valid = validator(jadwalDokterPattern, { hari, mulai, selesai });
    if (valid) {
      db("jadwalDokter").then(col => col.createIndex({ hari: 1, mulai: 1 }));
      this.data = { _id: ObjectID(), hari, mulai, selesai };
    }
  }
}

module.exports = JadwalDokter;
