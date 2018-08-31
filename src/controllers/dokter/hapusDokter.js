let { hapusDokter } = require("../../repository/dokter");

module.exports = (req, res) => {
  let { id_dokter } = req.params;
  hapusDokter(id_dokter)
    .then(doc => res.status(200).json(doc.value))
    .catch(() => res.status(400).json("gagal menghapus dokter"));
};
