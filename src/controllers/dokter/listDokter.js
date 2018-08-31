let { listDokter } = require("../../repository/dokter");

module.exports = (req, res) => {
  let { id_dokter } = req.params;
  listDokter(id_dokter ? id_dokter : null)
    .then(doc => res.status(200).json(doc))
    .catch(() => res.status(400).json("gagal menampilkan list dokter"));
};
