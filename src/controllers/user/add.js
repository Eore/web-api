let User = require("../../models/user");
let insert = require("../../method/insert");
let find = require("../../method/find");

module.exports = (req, res, next) => {
  let modelName = "user";
  find(modelName, { username: req.body.username })
    .then(
      user =>
        !user
          ? insert(modelName, User, req.body)
          : res.status(400).json("user exist")
    )
    .then(() => res.status(201).json({ ...req.body, password: "*secret*" }))
    .catch(() => next("add user failed"));
};
