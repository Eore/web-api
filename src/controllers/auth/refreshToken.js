let { genToken, verifyToken } = require("../../module/token");

module.exports = (req, res) => {
  let token = req.headers.authorization;
  try {
    let { _id, nama } = verifyToken(token);
    res.status(200).json(genToken({ _id, nama }));
  } catch (error) {
    res.status(400).json("token tidak valid");
  }
};
