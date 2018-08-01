let db = require("../../deps/database");

let validator = (start, end) => {
  let regex = /(\d+){2,2}\.(\d+){2,2}/g;
  return regex.test(start) && regex.test(end);
};

class JadwalDokter {
  constructor({ start = new String(), end = new String() }) {
    if (validator(start, end)) {
      db("dokter").then(col => col.createIndex({ nama: 1 }));
      this.data = { nama, spesialis, jadwal };
    } else {
      console.error("Input salah");
    }
  }
}

module.exports = JadwalDokter;
