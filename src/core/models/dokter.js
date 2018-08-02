let db = require("../../libs/database");

let validator = (nama, spesialis) =>
  !/(\w+){1,}/g.test(nama)
    ? "input nama dokter salah"
    : !/(\w+){1,}/g.test(spesialis)
      ? "input spesialis salah"
      : true;

class Dokter {
  constructor({
    nama = new String(),
    spesialis = new String(),
    jadwal = new Array()
  }) {
    let valid = validator(nama, validator);
    if (valid === true) {
      db("dokter").then(col => col.createIndex({ nama: 1 }));
      this.data = {
        nama,
        spesialis,
        jadwal
      };
    } else {
      console.error(valid);
    }
  }
}

module.exports = Dokter;
