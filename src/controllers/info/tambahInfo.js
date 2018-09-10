let { tambahInfo } = require("../../repository/info");
let { verifyToken } = require("../../module/token");

module.exports = (req, res) => {
  let { judul, isi } = req.body;
  let idUser = verifyToken(req.headers.user_token)._id;
  let gambar = req.file.filename;
  tambahInfo({
    judul,
    isi,
    penulis: idUser,
    gambar
  })
    .then(doc => res.status(201).json(doc.ops[0]))
    .catch(() => res.status(400).json("gagal menambah info"));
};
