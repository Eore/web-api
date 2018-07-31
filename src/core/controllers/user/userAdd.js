let { request, response } = require("express")();
let User = require("../../models/user");

// module.exports = (req = request, res = response) => {
//   let newUser = new User(req.body)
//   newUser.userAdd()
// };

let newUser = new User({
  username: "mia",
  password: "miawmiaw",
  nama: "lalala",
  email: "miaw@miaw.com"
});
newUser.userAdd();
