let read = require("../../methods/read");

module.exports = (req, res, next) => {
  read("info")
    .then(list => res.status(200).json(list))
    .catch(() => next("get list failed"));
};
