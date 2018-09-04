let { hapusInfo } = require("../../repository/info");

module.exports = (req, res) => {
  let idInfo = req.params.id_info;
  hapusInfo(idInfo ? idInfo : null)
    .then(doc => res.status(200).json(doc.value))
    .catch(() => res.status(400).json("gagal menghapus info"));
};
