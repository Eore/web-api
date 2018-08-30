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
