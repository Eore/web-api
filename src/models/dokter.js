let db = require("../libs/database");

class Dokter {
  constructor({
    nama = new String(),
    spesialis = new String(),
    jadwal = new Array()
  }) {
    db("dokter").then(col => col.createIndex({ nama: 1 }));
    this.data = {
      nama,
      spesialis,
      jadwal
    };
  }
}

module.exports = Dokter;
