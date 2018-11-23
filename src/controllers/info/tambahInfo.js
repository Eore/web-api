let { tambahInfo } = require("../../repository/info");
let { verifyToken } = require("../../module/token");

module.exports = (req, res) => {
  let { judul, isi, label, tag } = req.body;
  let idUser = verifyToken(req.headers.authorization)._id;
  let { filename } = req.files.gambar[0];
  tambahInfo({
    judul,
    isi,
    penulis: idUser,
    gambar: filename,
    label,
    tag
  })
    .then(doc => res.status(201).json(doc.ops[0]))
    .catch(() => res.status(400).json("gagal menambah info"));
};
