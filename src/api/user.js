module.exports = [
  {
    method: "GET",
    url: "/user",
    controller: "user/list",
    privillage: ["admin"]
  },
  {
    method: "GET",
    url: "/user/:username",
    controller: "user/find",
    privillage: ["user", "admin"]
  },
  {
    method: "POST",
    url: "/user",
    controller: "user/add",
    privillage: ["*"]
  },
  {
    method: "PUT",
    url: "/user",
    controller: "user/edit",
    privillage: ["user", "admin"]
  }
];
