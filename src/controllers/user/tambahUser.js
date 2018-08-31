let { tambahUser, cariUserByUsername } = require("../../repository/user");

module.exports = (req, res) => {
  let { username, password, nama, email } = req.body;
  cariUserByUsername(username)
    .then(user => (!user ? Promise.resolve() : Promise.reject()))
    .then(() =>
      tambahUser({
        username,
        password,
        nama,
        email
      })
        .then(doc => res.status(201).json(doc.ops[0]))
        .catch(() => res.status(400).json("gagal menambah user"))
    )
    .catch(() => res.status(400).json("username sudah ada"));
};
