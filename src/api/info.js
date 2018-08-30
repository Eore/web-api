module.exports = [
  {
    method: "GET",
    url: "/info",
    controller: "info/list",
    privillage: ["*"]
  },
  {
    method: "GET",
    url: "/info/:id_info",
    controller: "info/find",
    privillage: ["*"]
  },
  {
    method: "POST",
    url: "/info",
    controller: "info/add",
    privillage: ["admin"]
  },
  {
    method: "PUT",
    url: "/info/:id_info",
    controller: "info/edit",
    privillage: ["user"]
  },
  {
    method: "DELETE",
    url: "/info/:id_info",
    controller: "info/delete",
    privillage: ["admin"]
  }
];
