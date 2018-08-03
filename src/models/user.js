let db = require("../libs/database");
let { encrypt } = require("../libs/encryption");
let validator = require("../libs/validator/validator");
let userPattern = require("../libs/validator/pattern/user");

class User {
  constructor({
    username = new String(),
    password = new String(),
    nama = new String(),
    email = new String()
  }) {
    let valid = validator(userPattern, { username, password, nama, email });
    if (valid) {
      db("user").then(col =>
        col.createIndex({ username: 1 }, { unique: true })
      );
      this.data = {
        username,
        password: encrypt(password),
        nama,
        email,
        role: "user"
      };
    }
  }
}

module.exports = User;
