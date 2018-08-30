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

exports.Dokter = {
  nama: /^[A-z, ]{1,}$/,
  spesialis: /^[A-z, ]{1,}$/
};
