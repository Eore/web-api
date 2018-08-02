module.exports = [
  {
    method: "GET",
    url: "/dokter",
    controller: "dokter/list",
    privillage: ["*"]
  },
  {
    method: "GET",
    url: "/dokter/:id_dokter",
    controller: "dokter/find",
    privillage: ["*"]
  },
  {
    method: "POST",
    url: "/dokter",
    controller: "dokter/add",
    privillage: ["admin"]
  },
  // {
  //   method: "PUT",
  //   url: "/user/:username",
  //   controller: "user/edit",
  //   privillage: ["user"]
  // }
  {
    method: "DELETE",
    url: "/dokter/:id_dokter",
    controller: "dokter/delete",
    privillage: ["admin"]
  }
];
