let db = require("../module/database");
let ObjectID = require("mongodb").ObjectID;
let { User } = require("../models/user");
let { encrypt } = require("../module/encryption");

exports.tambahUser = ({ username, password, nama, email }) => {
  return User.username.test(username) &&
    User.password.test(password) &&
    User.email.test(email) &&
    User.nama.test(nama)
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

exports.editUser = (idUser, newData) =>
  db("user").then(col =>
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
  db("user").then(
    col => (username ? col.findOne({ username }) : col.find().toArray())
  );

exports.cariUserById = idUser =>
  db("user").then(col => col.findOne({ _id: ObjectID(idUser) }));
