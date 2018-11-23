let { editDokter } = require("../../repository/dokter");

module.exports = (req, res) => {
  let { id_dokter } = req.params;
  let data = req.body;
  let { filename } = req.files.foto[0];
  editDokter(id_dokter, { ...data, foto: filename })
    .then(doc => res.status(200).json(doc.value))
    .catch(() => res.status(400).json("gagal mengedit dokter"));
};
