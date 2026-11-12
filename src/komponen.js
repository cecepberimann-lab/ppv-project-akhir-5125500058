// src/komponen.js
export function buatItemCard(item, onHapus) {
    const card = document.createElement('div');
    card.className = 'card-item p-3 mb-2 border rounded shadow-sm bg-white';

    const title = document.createElement('h5');
    title.className = 'text-dark fw-bold';
    // Gunakan textContent agar aman dari injeksi XSS
    title.textContent = item.judul || 'Tanpa Judul';

    const desc = document.createElement('p');
    desc.className = 'text-muted mb-2';
    desc.textContent = item.deskripsi || '';

    const btnHapus = document.createElement('button');
    btnHapus.className = 'btn btn-danger btn-sm';
    btnHapus.textContent = 'Hapus';
    btnHapus.onclick = () => onHapus(item.id);

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(btnHapus);

    return card;
}