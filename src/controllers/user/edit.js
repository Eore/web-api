let User = require("../../models/user");
let update = require("../../methods/update");
let checkToken = require("../../checkToken");
let ObjectID = require("mongodb").ObjectID;
let validator = require("../../libs/validator/validator");
let userPattern = require("../../libs/validator/pattern/user");

module.exports = (req, res, next) => {
  let data = req.body;
  let { _id } = checkToken(req, res);
  validator(userPattern, data, false)
    ? update("user", User, { _id: ObjectID(_id) }, data)
        .then(() => res.status(200).json(data))
        .catch(() => next("edit user failed"))
    : res.status(400).json("wrong input");
};
