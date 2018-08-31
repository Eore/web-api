exports.Dokter = {
  nama: /^[A-z, ]{1,}$/,
  spesialis: /^[A-z, ]{1,}$/,
  jadwal: {
    hari: /\bsenin\b|\bselasa\b|\brabu\b|\bkamis\b|\bjumat\b|\bsabtu\b/,
    mulai: /\b\d+\.\d+\b/,
    selesai: /\b\d+\.\d+\b/
  }
};
