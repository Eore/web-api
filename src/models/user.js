let db = require("../libs/database");
let { encrypt } = require("../libs/encryption");

class User {
  constructor({
    username = new String(),
    password = new String(),
    nama = new String(),
    email = new String()
  }) {
    db("user").then(col => col.createIndex({ username: 1 }, { unique: true }));
    this.data = {
      username,
      password: encrypt(password),
      nama,
      email,
      role: "user"
    };
  }
}

module.exports = User;
