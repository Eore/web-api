let db = require("../../deps/database");
let { encrypt } = require("../../deps/encryption");

let validator = (username, password, nama, email) =>
  /(\w+){4,}/g.test(username) &&
  /(\w+){6,}/g.test(password) &&
  /(\w+){1,}/g.test(nama) &&
  /(\w+)\@(\w+)\.(\w+)/g.test(email);

class User {
  constructor({
    username = new String(),
    password = new String(),
    nama = new String(),
    email = new String()
  }) {
    if (validator(username, password, nama, email)) {
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
    } else {
      console.error("Input salah");
    }
  }
}

module.exports = User;
