let read = require("../../methods/read");

module.exports = (req, res, next) => {
  read("dokter")
    .then(list => res.status(200).json(list))
    .catch(() => next("get list failed"));
};
