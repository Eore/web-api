let db = require("../module/database");
let ObjectID = require("mongodb").ObjectID;
let { Dokter } = require("../models/dokter");

exports.tambahDokter = ({ nama, spesialis, jadwal }) => {
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
    ? db("user").then(col =>
        col.insert({
          username,
          password: encrypt(password),
          nama,
          email,
          role: "user"
        })
      )
    : Promise.reject("invalid data");
};

exports.editUser = (idUser, newData) => {
  db("user")
    .then(
      col => (
        col,
        col.findOne({ _id: ObjectID(idUser) }).then(user => {
          Object.keys(newData).forEach(key => (user[key] = newData[key]));
          return user;
        })
      )
    )
    .then((col, user) => col.findOneAndUpdate({ _id: ObjectID(idUser) }, user));
};

exports.listUser = () => db("user").then(col => col.find().toArray());

exports.cariUserByUsername = username =>
  db("user").then(col => col.findOne({ username }));
