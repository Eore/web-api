let { editUser, cariUserById } = require("../../repository/user");
let { verifyToken } = require("../../module/token");

module.exports = (req, res) => {
  let token = req.headers.user_token;
  let data = req.body;
  let { _id } = verifyToken(token);
  cariUserById(_id)
    .then(user => (user ? Promise.resolve() : Promise.reject()))
    .then(() =>
      editUser(_id, data)
        .then(doc => res.status(200).json(doc.value))
        .catch(() => res.status(400).json("gagal mengedit user"))
    )
    .catch(() => res.status(400).json("token tidak valid"));
};
