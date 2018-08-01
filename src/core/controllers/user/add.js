let User = require("../../models/user");
let db = require("../../../deps/database");

module.exports = (req, res, next) => {
  let newUser = new User(req.body);
  if (newUser.data)
    db("user")
      .then(col => col.insert(newUser.data))
      .then(() => res.status(201).json({ ...req.body, password: "*secret*" }))
      .catch(() => next("add user failed"));
};
