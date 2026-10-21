# Project Charter: Kalkulator IPK Modern & Multimedia

## 1. Masalah yang Diselesaikan
Mahasiswa sering kesulitan menghitung IPK secara manual dan kurang terorganisir dalam melacak riwayat nilai semester.

## 2. Pengguna Sasaran & Persona
* **Siapa:** Mahasiswa aktif.
* **Keseharian:** Menghadapi perkuliahan padat dan butuh memantau prestasi akademik secara praktis.
* **Masalah:** Ingin kalkulator IPK yang instan, akurat, dan serbaguna tanpa rumus manual yang rumit.

## 3. Fitur MVP (MoSCoW)
* **Must Have:** Tambah/hapus semester & mata kuliah, input SKS & nilai, hitung IPK otomatis.
* **Should Have:** Tombol salin ringkasan dan pemutar musik fokus lo-fi.
* **Could Have:** Simpan data otomatis (*Local Storage*).
* **Won't Have:** Login database cloud (sengaja tidak dibuat di sprint ini).

## 4. Kriteria Sukses
Pengguna dapat menghitung total IPK dari 2 semester dalam waktu $\le 2$ menit tanpa bantuan.

## 5. Risiko & Antisipasi
1. Data hilang saat browser direfresh $\rightarrow$ Solusi: Terapkan Local Storage di sprint berikutnya.
2. Salah input angka SKS $\rightarrow$ Solusi: Berikan validasi angka.
3. Tampilan rusak di HP $\rightarrow$ Solusi: Gunakan pustaka UI responsif (Bootstrap) dan uji di Responsive Design Mode.