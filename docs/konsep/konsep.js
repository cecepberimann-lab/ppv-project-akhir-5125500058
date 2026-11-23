// docs/konsep/konsep.js
const KONSEP = {
  nama: 'Kalkulator IPK Umum',
  tagline: 'Hitung dan prediksi IPK semesteran kapan saja tanpa menunggu transkrip resmi keluar.',
  persona: {
    nama: 'Andini Hafidzah Prayuni, 20 tahun',
    siapa: 'Mahasiswa aktif semester 3 yang sedang mengambil mata kuliah dengan berbagai bobot SKS.',
    keseharian: 'Menjalani perkuliahan harian, mengerjakan tugas, dan mencatat perkiraan nilai mandiri di tengah kesibukan.',
    masalah: 'Merasa ragu dengan akumulasi IPK semester berjalan karena rilis nilai resmi atau transkrip sering memakan waktu.',
  },
  masalah: 'Mahasiswa ingin mengetahui total IPK yang diperoleh pada semester yang diampu sebelum nilai resmi keluar. Catatan nilai manual sering membingungkan karena perbedaan bobot SKS tiap mata kuliah. Akibatnya, mahasiswa kesulitan merencanakan target nilai secara akurat.',
  solusi: 'Aplikasi web kalkulator IPK terbuka yang memungkinkan mahasiswa memasukkan mata kuliah, SKS, dan nilai secara bebas. Sistem langsung menghitung seluruh jumlah nilai dan IPK secara otomatis untuk berbagai bobot nilai. Pengguna juga dapat login saat menggunakan aplikasi dan logout setelah selesai.',
  fitur: [
    { nama: 'Login dan logout pengguna', prioritas: 'wajib', alasan: 'Mengelola sesi pengguna saat masuk dan keluar aplikasi.' },
    { nama: 'Input mata kuliah dan nilai', prioritas: 'wajib', alasan: 'Memasukkan data mata kuliah, bobot SKS, dan nilai yang diperoleh.' },
    { nama: 'Hitung total jumlah dan IPK', prioritas: 'wajib', alasan: 'Menghitung keseluruhan jumlah nilai dan IPK secara otomatis.' },
    { nama: 'Penyimpanan riwayat semester', prioritas: 'sebaiknya', alasan: 'Membantu memantau hasil IPK antar-semester tanpa menghambat hitung utama.' },
    { nama: 'Ekspor laporan ke PDF', prioritas: 'belum', alasan: 'Belum dibutuhkan untuk menguji alur hitung IPK utama saat ini.' },
  ],
  pembanding: [
    {
      nama: 'Portal Resmi Kampus (SIAKAD/ETHOL)',
      kelebihan: 'Data nilai resmi dan terekap otomatis dari dosen.',
      kekurangan: 'Nilai baru keluar di akhir semester atau menunggu proses rilis.',
    },
    {
      nama: 'Spreadsheet Manual (Excel/Google Sheets)',
      kelebihan: 'Bisa disesuaikan bebas oleh pengguna.',
      kekurangan: 'Harus menyusun rumus dan bobot sendiri serta rawan salah hitung.',
    },
  ],
  pembeda: 'Kalkulator IPK berbasis web yang terbuka untuk umum dengan pembaruan tampilan antarmuka (UI) yang lebih rapi.',
};