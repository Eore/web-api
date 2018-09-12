let { listInfo } = require("../../repository/info");

module.exports = (req, res) => {
  let idInfo = req.params.id_info;
  let { from, limit, byhit, label } = req.query;
  listInfo({
    idInfo,
    from,
    limit,
    byhit,
    label
  })
    .then(doc => res.status(200).json(doc))
    .catch(() => res.status(400).json("gagal menampilkan list info"));
};
