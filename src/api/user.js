module.exports = [
  {
    method: "GET",
    url: "/api/v1/user",
    controller: "user/listUser",
    privillage: ["admin"]
  },
  {
    method: "GET",
    url: "/api/v1/user/:username",
    controller: "user/cariUser",
    privillage: ["user", "admin"]
  },
  {
    method: "POST",
    url: "/api/v1/user",
    controller: "user/tambahUser",
    privillage: ["*"]
  },
  {
    method: "PUT",
    url: "/user",
    controller: "user/edit",
    privillage: ["user", "admin"]
  }
];
