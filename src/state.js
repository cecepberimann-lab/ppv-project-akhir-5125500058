// src/state.js

let currentUser = localStorage.getItem('ipk_user') || '';
let listMatkul = JSON.parse(localStorage.getItem('ipk_matkul')) || [];

// Modul Login/User
export function getUsername() {
    return currentUser;
}

export function setUsername(nama) {
    currentUser = nama;
    localStorage.setItem('ipk_user', nama);
}

export function clearUser() {
    currentUser = '';
    localStorage.removeItem('ipk_user');
}

// Modul Data Mata Kuliah
export function getMatkulList() {
    return listMatkul;
}

export function tambahMatkulItem(nama = '', sks = 3, nilai = 'A') {
    listMatkul.push({ nama, sks: Number(sks), nilai });
    simpanStorage();
}

export function updateMatkulItem(index, field, value) {
    if (listMatkul[index]) {
        listMatkul[index][field] = field === 'sks' ? Number(value) : value;
        simpanStorage();
    }
}

export function hapusMatkulItem(index) {
    listMatkul.splice(index, 1);
    simpanStorage();
}

export function resetMatkulList() {
    listMatkul = [];
    localStorage.removeItem('ipk_matkul');
}

function simpanStorage() {
    localStorage.setItem('ipk_matkul', JSON.stringify(listMatkul));
}

// Konversi Huruf Mutu ke Angka
function konversiNilai(huruf) {
    switch (huruf.toUpperCase()) {
        case 'A': return 4.0;
        case 'AB': return 3.5;
        case 'B': return 3.0;
        case 'BC': return 2.5;
        case 'C': return 2.0;
        case 'D': return 1.0;
        case 'E': return 0.0;
        default: return 0.0;
    }
}

// Hitung Total SKS & IPK
export function hitungIPKData() {
    let totalSKS = 0;
    let totalBobot = 0;

    listMatkul.forEach(m => {
        const sks = Number(m.sks) || 0;
        const bobot = konversiNilai(m.nilai);
        totalSKS += sks;
        totalBobot += (sks * bobot);
    });

    const ipk = totalSKS > 0 ? (totalBobot / totalSKS).toFixed(2) : '0.00';
    return { totalSKS, ipk };
}