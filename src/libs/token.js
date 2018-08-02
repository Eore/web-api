let jwt = require("jsonwebtoken");
let key = "m1awm14w";

exports.genToken = data => jwt.sign(data, key, { expiresIn: 60 * 10 });
exports.verifyToken = token => jwt.verify(token, key);
exports.decodeToken = token => jwt.decode(token);
