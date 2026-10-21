/**
 * ui-pustaka.js
 * Berkas pembungkus (wrapper) untuk mengelola komponen Pustaka UI (Bootstrap 5)
 */

// Fungsi untuk menampilkan modal detail atau peringatan
export function tampilkanModal(modalId) {
    const modalElement = document.getElementById(modalId);
    if (modalElement && window.bootstrap) {
        const modalInstance = new bootstrap.Modal(modalElement);
        modalInstance.show();
    }
}

// Fungsi untuk menutup modal
export function tutupModal(modalId) {
    const modalElement = document.getElementById(modalId);
    if (modalElement && window.bootstrap) {
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide();
        }
    }
}

// Fungsi untuk memunculkan notifikasi Toast (jika ada elemen toast di HTML)
export function tampilkanToast(toastId) {
    const toastElement = document.getElementById(toastId);
    if (toastElement && window.bootstrap) {
        const toastInstance = new bootstrap.Toast(toastElement);
        toastInstance.show();
    }
}