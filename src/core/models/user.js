let db = require("../../libs/database");
let { encrypt } = require("../../libs/encryption");

let validator = (username, password, nama, email) =>
  !/(\w+){4,}/g.test(username)
    ? "input username salah"
    : !/(\w+){6,}/g.test(password)
      ? "input password salah"
      : !/(\w+){1,}/g.test(nama)
        ? "input nama salah"
        : !/(\w+)\@(\w+)\.(\w+)/g.test(email)
          ? "input email salah"
          : true;

class User {
  constructor({
    username = new String(),
    password = new String(),
    nama = new String(),
    email = new String()
  }) {
    let valid = validator(username, password, nama, email);
    if (valid === true) {
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
      console.error(valid);
    }
  }
}

module.exports = User;
