module.exports = [
  // {
  //   method: "GET",
  //   url: "/info",
  //   controller: "info/list",
  //   privillage: ["*"]
  // },
  {
    method: "GET",
    url: "/api/v1/info/:id_info?",
    controller: "info/listInfo",
    privillage: ["*"]
  },
  {
    method: "POST",
    url: "/api/v1/info",
    controller: "info/tambahInfo",
    privillage: ["admin"]
  },
  // {
  //   method: "PUT",
  //   url: "/info/:id_info",
  //   controller: "info/edit",
  //   privillage: ["user"]
  // },
  {
    method: "DELETE",
    url: "/api/v1/info/:id_info",
    controller: "info/hapusInfo",
    privillage: ["admin"]
  }
];
