let Info = require("../../models/info");
let update = require("../../methods/update");
let ObjectID = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  let data = req.body;
  let id_info = req.params.id_info;
  update("info", Info, { _id: ObjectID(id_info) }, data)
    .then(() => res.status(200).json(data))
    .catch(err => res.status(400).json(err));
};
