let User = require("../../models/user");
let update = require("../../method/update");
let checkToken = require("../../checkToken");
let ObjectID = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  let { _id } = checkToken(req, res);
  update("user", User, { _id: ObjectID(_id) }, req.body)
    .then(() => res.status(200).json(req.body))
    .catch(() => next("edit user failed"));
};
