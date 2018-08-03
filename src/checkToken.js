let { verifyToken } = require("./libs/token");

module.exports = (req, res) => {
  let token = req.headers.user_token;
  try {
    verifyToken(token);
  } catch (error) {
    res.status(401).json("token expired");
  }
  return verifyToken(token);
};
