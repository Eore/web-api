let { editInfo } = require("../../repository/info");

module.exports = (req, res) => {
  let idInfo = req.params.id_info;
  let data = req.body;
  editInfo(idInfo, data)
    .then(doc => res.status(200).json(doc.value))
    .catch(() => res.status(400).json("gagal menghapus info"));
};
