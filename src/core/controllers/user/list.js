let read = require("../../method/read");

module.exports = (req, res, next) => {
  read("user")
    .then(list => {
      list = list.map(el => {
        let { password, ...rest } = el;
        return rest;
      });
      res.status(200).json(list);
    })
    .catch(() => next("get list failed"));
};
