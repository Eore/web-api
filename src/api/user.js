module.exports = [
  {
    method: "GET",
    url: "/user",
    controller: "user/userList",
    privillage: ["admin"]
  },
  {
    method: "POST",
    url: "/user",
    controller: "user/userAdd",
    privillage: ["user", "guest"]
  },
  {
    method: "PUT",
    url: "/user/:id",
    controller: "user/userEdit",
    privillage: ["user"]
  }
];
