module.exports = [
  {
    method: "POST",
    url: "/jadwaldokter/:id_dokter",
    controller: "jadwalDokter/add",
    privillage: ["admin"]
  },
  {
    method: "DELETE",
    url: "/jadwaldokter/:id_dokter/:id_jadwal",
    controller: "jadwalDokter/delete",
    privillage: ["admin"]
  }
];
