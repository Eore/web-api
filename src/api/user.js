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
    privillage: ["admin"]
  },
  {
    method: "POST",
    url: "/user",
    controller: "user/add",
    privillage: ["guest"]
  },
  {
    method: "PUT",
    url: "/user/:username",
    controller: "user/edit",
    privillage: ["user"]
  }
];
