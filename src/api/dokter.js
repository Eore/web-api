module.exports = [
  {
    method: "GET",
    url: "/api/v1/dokter/:id_dokter?",
    controller: "dokter/listDokter",
    privillage: ["*"]
  },
  {
    method: "POST",
    url: "/api/v1/dokter",
    controller: "dokter/tambahDokter",
    privillage: ["*"]
  },
  {
    method: "PUT",
    url: "/api/v1/dokter/:id_dokter",
    controller: "dokter/editDokter",
    privillage: ["user"]
  },
  {
    method: "DELETE",
    url: "/api/v1/dokter/:id_dokter",
    controller: "dokter/hapusDokter",
    privillage: ["admin"]
  }
];
