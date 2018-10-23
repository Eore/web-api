let { tambahDokter } = require("../../repository/dokter");

module.exports = (req, res) => {
  let { nama, spesialis, jadwal } = req.body;
  jadwal = jadwal.map(val => {
    return {
      ...val,
      hari: val.hari.toLowerCase()
    };
  });
  tambahDokter({
    nama,
    spesialis,
    jadwal
  })
    .then(doc => res.status(201).json(doc.ops[0]))
    .catch(err => {
      console.log(err);
      res.status(400).json("gagal menambah dokter");
    });
};
