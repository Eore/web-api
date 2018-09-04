let { listUser } = require("../../repository/user");

module.exports = (req, res) => {
  let { username } = req.params;
  let { from, limit } = req.query;
  listUser(username ? username : null, from, limit)
    .then(user => {
      user = user.map(({ username, nama, email, role }) => {
        return {
          username,
          nama,
          email,
          role
        };
      });
      res.status(200).json(user);
    })
    .catch(() => res.status(400).json("gagal menampilkan list user"));
};