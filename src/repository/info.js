let { connection } = require("../module/database");
let ObjectID = require("mongodb").ObjectID;
let { Info } = require("../models/info");
let { encrypt } = require("../module/encryption");

exports.tambahInfo = ({ judul, isi, penulis }) => {
  return Info.judul.test(judul) &&
    Info.isi.test(isi) &&
    Info.penulis.test(penulis)
    ? connection("info").then(col =>
        col.insert({
          judul,
          isi,
          penulis,
          createAt: new Date(),
          updateAt: new Date(),
          hit: 0
        })
      )
    : Promise.reject("invalid data");
};

exports.editUser = (idUser, newData) =>
  connection("user").then(col =>
    col
      .findOne({ _id: ObjectID(idUser) })
      .then(user => {
        if (user) {
          Object.keys(newData).forEach(key => {
            if (key === "password") user[key] = encrypt(newData[key]);
            else user[key] = newData[key];
          });
          return user;
        } else {
          return Promise.reject("user tidak ditemukan");
        }
      })
      .then(user =>
        col.findOneAndUpdate({ _id: ObjectID(idUser) }, { $set: user })
      )
  );

exports.listUser = username =>
  connection("user").then(col =>
    col.find(username ? { username } : null).toArray()
  );

exports.cariUserById = idUser =>
  connection("user").then(col => col.findOne({ _id: ObjectID(idUser) }));
