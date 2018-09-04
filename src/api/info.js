module.exports = [
  {
    method: "GET",
    url: "/api/v1/info/:id_info?",
    controller: "info/listInfo",
    privilege: ["*"]
  },
  {
    method: "POST",
    url: "/api/v1/info",
    controller: "info/tambahInfo",
    privilege: ["admin"]
  },
  {
    method: "PUT",
    url: "/api/v1/info/:id_info",
    controller: "info/editInfo",
    privilege: ["admin"]
  },
  {
    method: "DELETE",
    url: "/api/v1/info/:id_info",
    controller: "info/hapusInfo",
    privilege: ["admin"]
  }
];
