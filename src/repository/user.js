let { connection } = require("../module/database");
let ObjectID = require("mongodb").ObjectID;
let { User } = require("../models/user");
let { encrypt } = require("../module/encryption");

exports.tambahUser = ({ username, password, nama, email }) => {
  return User.username.test(username) &&
    User.password.test(password) &&
    User.email.test(email) &&
    User.nama.test(nama)
    ? connection("user").then(col =>
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
  connection("user").then(
    col => (username ? col.find({ username }).toArray() : col.find().toArray())
  );

exports.cariUserById = idUser =>
  connection("user").then(col => col.findOne({ _id: ObjectID(idUser) }));
