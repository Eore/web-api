let db = require("./libs/database");
let ObjectID = require("mongodb").ObjectID;
let checkToken = require("./checkToken");

module.exports = role => (req, res, next) => {
  if (role.indexOf("*") !== -1) {
    next();
  } else {
    let { _id } = checkToken(req, res);
    db("user")
      .then(col => col.findOne({ _id: ObjectID(_id) }))
      .then(user => {
        role.map(el => (el === user.role ? true : false)).indexOf(true) !== -1
          ? next()
          : res.status(401).json("not authorize");
      });
  }
};
