let db = require("../../deps/database");

class Dokter {
  constructor({
    nama = new String(),
    spesialis = new String(),
    jadwal = new Array()
  }) {
    if (/(\w+){1,}/g.test(nama) && /(\w+){1,}/g.test(spesialis)) {
      db("dokter").then(col => col.createIndex({ nama: 1 }));
      this.data = {
        nama,
        spesialis,
        jadwal
      };
    } else {
      console.error("Input salah");
    }
  }
}

module.exports = Dokter;
