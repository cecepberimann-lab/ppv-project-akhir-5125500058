// src/main.js
import { 
    getUsername, setUsername, clearUser, 
    getMatkulList, tambahMatkulItem, updateMatkulItem, 
    hapusMatkulItem, resetMatkulList, hitungIPKData 
} from './state.js';

import { 
    tampilkanLayar, updateGreeting, 
    renderTabel, updateRingkasanHasil 
} from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    cekSesiAwal();

    // 1. Event Login Form
    const loginForm = document.querySelector('#login-screen form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('username');
            const nama = usernameInput.value.trim();
            if (nama) {
                setUsername(nama);
                usernameInput.value = '';
                cekSesiAwal();
            }
        });
    }

    // 2. Event Logout Button
    const btnLogout = document.querySelector('.user-menu button');
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            clearUser();
            cekSesiAwal();
        });
    }

    // 3. Tombol Tambah Baris Matkul
    const btnTambah = document.querySelector("button[onclick*='tambahBaris']") || 
                      document.querySelector("button.btn-primary");
    // Atau tangkap berdasarkan teks/posisinya di card-header
    const headerBtn = document.querySelector('.card-header button');
    if (headerBtn) {
        // Bersihkan onclick lama jika ada
        headerBtn.removeAttribute('onclick');
        headerBtn.addEventListener('click', () => {
            tambahMatkulItem('', 3, 'A');
            muatUlangTampilan();
        });
    }

    // 4. Tombol Hitung IPK & Reset
    const btnHitung = document.querySelector("button[onclick*='hitungIPK']") || document.querySelector('.btn-success');
    if (btnHitung) {
        btnHitung.removeAttribute('onclick');
        btnHitung.addEventListener('click', () => {
            lakukanPerhitungan();
        });
    }

    const btnReset = document.querySelector("button[onclick*='resetData']") || document.querySelector('.btn-secondary');
    if (btnReset) {
        btnReset.removeAttribute('onclick');
        btnReset.addEventListener('click', () => {
            if (confirm('Yakin ingin mereset semua data mata kuliah?')) {
                resetMatkulList();
                muatUlangTampilan();
            }
        });
    }

    // 5. Event Delegation untuk Input & Tombol Hapus dalam Tabel
    const tbody = document.getElementById('matkul-list');
    if (tbody) {
        tbody.addEventListener('input', (e) => {
            const index = e.target.dataset.index;
            if (index !== undefined) {
                if (e.target.classList.contains('input-nama')) {
                    updateMatkulItem(index, 'nama', e.target.value);
                } else if (e.target.classList.contains('input-sks')) {
                    updateMatkulItem(index, 'sks', e.target.value);
                }
            }
        });

        tbody.addEventListener('change', (e) => {
            const index = e.target.dataset.index;
            if (index !== undefined && e.target.classList.contains('input-nilai')) {
                updateMatkulItem(index, 'nilai', e.target.value);
            }
        });

        tbody.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-hapus')) {
                const index = e.target.dataset.index;
                hapusMatkulItem(index);
                muatUlangTampilan();
            }
        });
    }
});

function cekSesiAwal() {
    const user = getUsername();
    if (user) {
        tampilkanLayar(true);
        updateGreeting(user);
        muatUlangTampilan();
    } else {
        tampilkanLayar(false);
    }
}

function muatUlangTampilan() {
    const list = getMatkulList();
    renderTabel(list);
    lakukanPerhitungan();
}

function lakukanPerhitungan() {
    const { totalSKS, ipk } = hitungIPKData();
    updateRingkasanHasil(totalSKS, ipk);
}