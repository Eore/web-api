module.exports = [
  // {
  //   method: "GET",
  //   url: "/dokter",
  //   controller: "user/list",
  //   privillage: ["admin"]
  // },
  // {
  //   method: "GET",
  //   url: "/user/:username",
  //   controller: "user/find",
  //   privillage: ["admin"]
  // },
  {
    method: "POST",
    url: "/dokter",
    controller: "dokter/add",
    privillage: ["user"]
  }
  // {
  //   method: "PUT",
  //   url: "/user/:username",
  //   controller: "user/edit",
  //   privillage: ["user"]
  // }
];
