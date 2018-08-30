let bcrypt = require("bcrypt");

exports.encrypt = plainPassword =>
  bcrypt.hashSync(plainPassword, bcrypt.genSaltSync(4));

exports.check = (plainPassword, encryptedPassword) =>
  bcrypt.compareSync(plainPassword, encryptedPassword);
