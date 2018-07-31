let Database = require("../deps/database/operations");

class User extends Database {
  constructor({
    username = new String(),
    password = new String(),
    nama = new String(),
    email = new String()
  }) {
    super();
    this.collectionName = "user";
    this.validInput = false;
    if (
      /(\w+){4,}/g.test(username) &&
      /(\w+){6,}/g.test(password) &&
      /(\w+){1,}/g.test(nama) &&
      /(\w+)\@(\w+)\.(\w+)/g.test(email)
    ) {
      this.validInput = true;
      this.data = {
        username,
        password,
        nama,
        email,
        role: "user"
      };
    } else {
      console.error("Input salah");
    }
  }

  userAdd() {
    if (this.validInput) this.insert(this.data);
  }
}

module.exports = User;
