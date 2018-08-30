let { listUser } = require("../../repository/user");

module.exports = (req, res) => {
  listUser()
    .then(user => {
      user = user.map(({ username, nama, email, role }) => {
        return {
          username,
          nama,
          email,
          role
        };
      });
      res.status(201).json(user);
    })
    .catch(err => res.status(400).json(err));
};
