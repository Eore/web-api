let User = require("../../models/user");
let update = require("../../methods/update");
let find = require("../../methods/find");
let checkToken = require("../../checkToken");
let ObjectID = require("mongodb").ObjectID;
let validator = require("../../libs/validator/validator");
let userPattern = require("../../libs/validator/pattern/user");

module.exports = (req, res, next) => {
  let { username, ...data } = req.body;
  let { _id } = checkToken(req, res);
  find("user", { _id: ObjectID(_id) })
    .then(user => {
      Object.keys(data).forEach(el => (user[el] = data[el]));
      return user;
    })
    .then(newUser => {
      let { _id, role, ...data } = newUser;
      validator(userPattern, data, false)
        ? update("user", User, { _id: ObjectID(_id) }, { ...data, role })
            .then(() => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
        : res.status(400).json("wrong input");
    });
};
