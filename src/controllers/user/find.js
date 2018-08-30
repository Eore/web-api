let find = require("../../methods/find");

module.exports = (req, res, next) => {
  let username = req.params.username;
  find("user", { username })
    .then(user => res.status(200).json(user))
    .catch(() => next("get user failed"));
};
