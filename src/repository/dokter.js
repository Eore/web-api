let { connection } = require("../module/database");
let ObjectID = require("mongodb").ObjectID;
let { Dokter } = require("../models/dokter");

exports.tambahDokter = ({ nama, spesialis, jadwal }) => {
  jadwal = jadwal.map(val => {
    return {
      _id: ObjectID(),
      ...val
    };
  });

  let testJadwal =
    jadwal
      .map(
        ({ hari, mulai, selesai }) =>
          Dokter.jadwal.hari.test(hari) &&
          Dokter.jadwal.mulai.test(mulai) &&
          Dokter.jadwal.selesai.test(selesai)
      )
      .indexOf(false) !== -1
      ? false
      : true;

  return Dokter.nama.test(nama) &&
    Dokter.spesialis.test(spesialis) &&
    testJadwal
    ? connection("dokter").then(col =>
        col.insert({
          nama,
          spesialis,
          jadwal
        })
      )
    : Promise.reject("input salah");
};

exports.editDokter = (idDokter, newData) =>
  connection("dokter").then(col =>
    col
      .findOne({ _id: ObjectID(idDokter) })
      .then(dokter => {
        if (dokter) {
          Object.keys(newData).forEach(key => (dokter[key] = newData[key]));
          return dokter;
        } else {
          return Promise.reject("dokter tidak ditemukan");
        }
      })
      .then(dokter =>
        col.findOneAndUpdate({ _id: ObjectID(idDokter) }, { $set: dokter })
      )
  );

exports.listDokter = idDokter =>
  connection("dokter").then(
    col =>
      idDokter
        ? col.find({ _id: ObjectID(idDokter) }).toArray()
        : col.find().toArray()
  );

exports.hapusDokter = idDokter =>
  connection("dokter").then(col =>
    col.findOneAndDelete({ _id: ObjectID(idDokter) })
  );
