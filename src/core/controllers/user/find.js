let find = require("../../method/find");
let checkToken = require("../../checkToken");
let ObjectID = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  let { _id } = checkToken(req, res);
  find("user", { _id: ObjectID(_id) })
    .then(user => res.status(200).json({ ...user, password: "*secret*" }))
    .catch(() => next("get user failed"));
};
