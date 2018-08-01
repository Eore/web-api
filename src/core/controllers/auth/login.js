let db = require("../../../deps/database");
let { encrypt } = require("../../../deps/encryption");
let { genToken } = require("../../../deps/token");

module.exports = (req, res, next) => {
  let username = req.body.username;
  let password = encrypt(req.body.password);
  db("user")
    .then(col => col.findOne({ username, password }))
    .then(user => {
      if (user) {
        res.status(200).json(genToken({ _id: user._id, nama: user.nama }));
      } else {
        res.status(403).json("username/password salah");
      }
    })
    .catch(() => next("get list error"));
};
