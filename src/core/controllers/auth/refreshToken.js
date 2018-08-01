let db = require("../../../deps/database");
let { genToken, verifyToken } = require("../../../deps/token");

module.exports = (req, res, next) => {
  try {
    let token = req.headers.user_token;
    let data = verifyToken(token);
    res.status(200).json(genToken({ _id: data._id, nama: data.nama }));
  } catch (error) {
    next("token not valid");
  }
};
