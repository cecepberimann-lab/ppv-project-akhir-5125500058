# Roadmap Proyek — Kalkulator IPK Modern & Multimedia

## 📌 Status Pengerjaan

### Sprint 1: Perencanaan & Dokumen Proyek (Selesai)
* [x] Inisialisasi struktur repositori dan direktori (`docs/`, `src/`).
* [x] Penyusunan dokumen `CHARTER.md` dan `ROADMAP.md`.
* [x] Pembuatan berkas inventaris dependensi (`DEPENDENCIES.md`).

### Sprint 2: Implementasi Antarmuka & Pustaka (Selesai)
* [x] Integrasi Bootstrap 5.3.3 via CDN dan wrapper pustaka UI (`src/ui-pustaka.js`).
* [x] Pengembangan fitur utama aplikasi (Layar login, daftar mata kuliah, dan kalkulator IPK).
* [x] Initial commit dan pengunggahan repositori ke GitHub (`ppv-project-akhir-5125500058`).

### Sprint 3: Bedah Monolit & Modularisasi ES Modules (Selesai - Tugas P11)
* [x] Memecah kode monolitik lama menjadi modular ES (`src/state.js`, `src/ui.js`, `src/main.js`).
* [x] Memastikan `src/state.js` bersih dari manipulasi DOM dan logika penyimpanan lokal terisolasi.
* [x] Menghapus seluruh variabel global di `window` dan mengganti atribut `onclick` HTML dengan `addEventListener`.
* [x] Pembuatan dokumen peta modul (`MODULE_MAP.md`).
* [x] Pengujian regresi alur MVP: aplikasi berjalan normal tanpa galat (*error*) di Console.