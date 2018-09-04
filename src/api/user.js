module.exports = [
  {
    method: "GET",
    url: "/api/v1/user/:username?",
    controller: "user/listUser",
    privilege: ["user", "admin"]
  },
  {
    method: "POST",
    url: "/api/v1/user",
    controller: "user/tambahUser",
    privilege: ["*"]
  },
  {
    method: "PUT",
    url: "/api/v1/user",
    controller: "user/editUser",
    privilege: ["user", "admin"]
  }
];
