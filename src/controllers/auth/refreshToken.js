let { genToken, verifyToken } = require("../../module/token");

module.exports = (req, res) => {
  let token = req.headers.user_token;
  try {
    let data = verifyToken(token);
    res.status(200).json(genToken({ _id: data._id, nama: data.nama }));
  } catch (error) {
    res.status(400).json("token tidak valid");
  }
};
