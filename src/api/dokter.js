module.exports = [
  {
    method: "GET",
    url: "/api/v1/dokter/:id_dokter?",
    controller: "dokter/listDokter",
    privilege: ["*"]
  },
  {
    method: "POST",
    url: "/api/v1/dokter",
    controller: "dokter/tambahDokter",
    privilege: ["admin"]
  },
  {
    method: "PUT",
    url: "/api/v1/dokter/:id_dokter",
    controller: "dokter/editDokter",
    privilege: ["admin"]
  },
  {
    method: "DELETE",
    url: "/api/v1/dokter/:id_dokter",
    controller: "dokter/hapusDokter",
    privilege: ["admin"]
  }
];
