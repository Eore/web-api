let User = require("../../models/user");
let insert = require("../../methods/insert");
let find = require("../../methods/find");
let validator = require("../../libs/validator/validator");
let userPattern = require("../../libs/validator/pattern/user");

module.exports = (req, res, next) => {
  let data = req.body;
  let modelName = "user";
  find(modelName, { username: data.username })
    .then(
      user =>
        !user
          ? validator(userPattern, data)
            ? insert(modelName, User, data)
            : res.status(400).json("wrong input")
          : res.status(400).json("user exist")
    )
    .then(() => res.status(201).json({ ...data, password: "*secret*" }))
    .catch(() => next("add user failed"));
};
