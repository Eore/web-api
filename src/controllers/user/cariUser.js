let { cariUserByUsername } = require("../../repository/user");

module.exports = (req, res) => {
  let { username } = req.params;
  cariUserByUsername(username)
    .then(user => {
      let { _id, password, ...data } = user;
      res.status(201).json(data);
    })
    .catch(err => res.status(400).json(err));
};
