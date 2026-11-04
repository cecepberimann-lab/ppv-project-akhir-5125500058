# MODULE_MAP.md - Proyek Akhir (Sprint 3)

## Peta Arah Import Modul
* `src/main.js` mengimpor dari `src/state.js` dan `src/ui.js`.
* `src/state.js` dan `src/ui.js` berdiri sendiri (tidak saling mengimpor satu sama lain untuk menghindari dependensi melingkar).

## Tanggung Jawab Modul (Satu Kalimat)
1. **`src/state.js`**: Mengelola data mata kuliah di localStorage, sesi pengguna, serta logika perhitungan IPK tanpa menyentuh DOM.
2. **`src/ui.js`**: Mengatur perenderan elemen tabel, pembaruan ringkasan hasil, dan pengelolaan transisi layar antarmuka.
3. **`src/main.js`**: Bertindak sebagai titik masuk (*entry point*) utama yang menghubungkan interaksi event pengguna menggunakan `addEventListener`.

## Bagian yang Belum Dimodulkan & Alasannya
* Berkas penataan gaya (`style.css`) tetap dibiarkan terpisah di luar folder `src/` karena merupakan aset lembar gaya global, bukan modul logika JavaScript.