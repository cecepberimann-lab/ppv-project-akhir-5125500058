// src/storage.js
const KUNCI_STORAGE = 'aplikasi-proyek:v1';

export function muatData(dataDefault = []) {
    try {
        const dataJson = localStorage.getItem(KUNCI_STORAGE);
        if (!dataJson) return dataDefault;
        return JSON.parse(dataJson);
    } catch (error) {
        console.warn("Data lokal rusak, memuat data default...", error);
        return dataDefault;
    }
}

export function simpanData(data) {
    try {
        localStorage.setItem(KUNCI_STORAGE, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error("Gagal menyimpan data ke storage:", error);
        return false;
    }
}