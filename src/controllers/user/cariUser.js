let { listUser } = require("../../repository/user");

module.exports = (req, res) => {
  let { username } = req.params;
  listUser(username)
    .then(user => {
      let { _id, password, ...data } = user;
      res.status(200).json(data);
    })
    .catch(err => res.status(400).json(err));
};
