let db = require("../../libs/database");
let ObjectID = require("mongodb").ObjectID;

let validator = (hari, mulai, selesai) =>
  !/(\w+){1,}/g.test(hari)
    ? "input hari salah"
    : !/(\d+){2,2}\.(\d+){2,2}/g.test(mulai)
      ? "input mulai salah"
      : !/(\d+){2,2}\.(\d+){2,2}/g.test(selesai)
        ? "input selesai salah"
        : true;

class JadwalDokter {
  constructor({
    hari = new String(),
    mulai = new String(),
    selesai = new String()
  }) {
    let valid = validator(hari, mulai, selesai);
    if (valid === true) {
      db("jadwalDokter").then(col => col.createIndex({ hari: 1, mulai: 1 }));
      this.data = { _id: ObjectID(), hari, mulai, selesai };
    } else {
      console.error(valid);
    }
  }
}

module.exports = JadwalDokter;
