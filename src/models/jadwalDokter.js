let db = require("../libs/database");
let ObjectID = require("mongodb").ObjectID;

class JadwalDokter {
  constructor({
    hari = new String(),
    mulai = new String(),
    selesai = new String()
  }) {
    db("jadwalDokter").then(col => col.createIndex({ hari: 1, mulai: 1 }));
    this.data = { _id: ObjectID(), hari, mulai, selesai };
  }
}

module.exports = JadwalDokter;
