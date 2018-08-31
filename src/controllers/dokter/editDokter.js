let { editDokter } = require("../../repository/dokter");

module.exports = (req, res) => {
  let { id_dokter } = req.params;
  let data = req.body;
  console.log("con", data, id_dokter);
  editDokter(id_dokter, data)
    .then(doc => res.status(200).json(doc.value))
    .catch(err => res.status(400).json(err));
};
