// let db = require("../libs/database");
// let ObjectID = require("mongodb").ObjectID;

// class Info {
//   constructor({
//     createdAt = new Date(),
//     updatedAt = new Date(),
//     revisi = new Number(),
//     judul = new String(),
//     isi = new String(),
//     penulis = new String(),
//     gambar = new String()
//   }) {
//     db("info").then(col => col.createIndex({ createdAt: 1 }));
//     this.data = {
//       _id: ObjectID(),
//       createdAt,
//       updatedAt,
//       revisi,
//       judul,
//       isi,
//       penulis,
//       gambar
//     };
//   }
// }

// module.exports = Info;

exports.Info = {
  revisi: /\d/,
  isi: /[^]{2,}/,
  judul: /[^]{2,}/,
  penulis: /^[A-z]{1,}$/,
  hit: /\d/
};
