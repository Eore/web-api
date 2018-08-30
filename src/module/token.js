let jwt = require("jsonwebtoken");
let key = "m1@wm14w";

exports.genToken = data => jwt.sign(data, key, { expiresIn: 60 * 10 });
exports.verifyToken = token => jwt.verify(token, key);
