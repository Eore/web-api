let db = require("../../../deps/database");
let ObjectID = require("mongodb").ObjectID;
let { verifyToken } = require("../../../deps/token");

module.exports = (req, res, next) => {
  let token = req.headers.user_token;
  let plain;
  try {
    plain = verifyToken(token);
  } catch (error) {
    next("token expired");
  }
  db("user")
    .then(col => {
      col
        .findOne({ _id: new ObjectID(plain._id) })
        .then(
          found =>
            found.username === req.params.username ? found : Promise.reject()
        );
      return col;
    })
    .then(col => {
      return col.findOne({ username: req.params.username });
    })
    .then(list => {
      let { password, ...rest } = list;
      res.status(200).json(rest);
    })
    .catch(() => next("get list error"));
};
