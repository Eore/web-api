let db = require("../libs/database");
let validator = require("../libs/validator/validator");
let dokterPattern = require("../libs/validator/pattern/dokter");

class Dokter {
  constructor({
    nama = new String(),
    spesialis = new String(),
    jadwal = new Array()
  }) {
    let valid = validator(dokterPattern, { nama, spesialis });
    if (valid) {
      db("dokter").then(col => col.createIndex({ nama: 1 }));
      this.data = {
        nama,
        spesialis,
        jadwal
      };
    }
  }
}

module.exports = Dokter;
