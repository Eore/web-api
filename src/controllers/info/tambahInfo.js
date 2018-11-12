let { tambahInfo } = require("../../repository/info");
let { verifyToken } = require("../../module/token");

module.exports = (req, res) => {
  let { judul, isi, label } = req.body;
  let idUser = verifyToken(req.headers.Authorization)._id;
  let gambar = req.file.filename;
  tambahInfo({
    judul,
    isi,
    penulis: idUser,
    gambar,
    label
  })
    .then(doc => res.status(201).json(doc.ops[0]))
    .catch(() => res.status(400).json("gagal menambah info"));
};
