let db = require("../../../libs/database");
let { encrypt } = require("../../../libs/encryption");
let { genToken } = require("../../../libs/token");

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
    .catch(() => next("login failed"));
};
