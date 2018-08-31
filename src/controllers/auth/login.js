let { listUser } = require("../../repository/user");
let { check } = require("../../module/encryption");
let { genToken } = require("../../module/token");

module.exports = (req, res) => {
  let { username, password } = req.body;
  listUser(username)
    .then(user => (user ? user : Promise.reject()))
    .then(
      user =>
        check(password, user.password)
          ? res.status(200).json(genToken({ _id: user._id, nama: user.nama }))
          : res.status(401).json("password salah")
    )
    .catch(() => res.status(400).json("username tidak ada"));
};
