let find = require("../../method/find");

module.exports = (req, res, next) => {
  find("user", { username: req.params.username })
    .then(user => res.status(200).json({ ...user, password: "*secret*" }))
    .catch(() => next("get user failed"));
};
