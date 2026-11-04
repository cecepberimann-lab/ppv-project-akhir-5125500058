// src/ui.js

export function tampilkanLayar(isLoggedIn) {
    const loginScreen = document.getElementById('login-screen');
    const appScreen = document.getElementById('app-screen');

    if (isLoggedIn) {
        loginScreen.classList.add('hidden');
        appScreen.classList.remove('hidden');
    } else {
        loginScreen.classList.remove('hidden');
        appScreen.classList.add('hidden');
    }
}

export function updateGreeting(nama) {
    const greeting = document.getElementById('user-greeting');
    if (greeting) {
        greeting.textContent = `Halo, ${nama}!`;
    }
}

export function renderTabel(listMatkul) {
    const tbody = document.getElementById('matkul-list');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (listMatkul.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="text-center text-muted">Belum ada mata kuliah. Silakan tambah.</td></tr>`;
        return;
    }

    listMatkul.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="text" class="input-nama" data-index="${index}" value="${item.nama}" placeholder="Nama Matkul"></td>
            <td><input type="number" class="input-sks" data-index="${index}" value="${item.sks}" min="1" max="6"></td>
            <td>
                <select class="input-nilai" data-index="${index}">
                    <option value="A" ${item.nilai === 'A' ? 'selected' : ''}>A (4.0)</option>
                    <option value="AB" ${item.nilai === 'AB' ? 'selected' : ''}>AB (3.5)</option>
                    <option value="B" ${item.nilai === 'B' ? 'selected' : ''}>B (3.0)</option>
                    <option value="BC" ${item.nilai === 'BC' ? 'selected' : ''}>BC (2.5)</option>
                    <option value="C" ${item.nilai === 'C' ? 'selected' : ''}>C (2.0)</option>
                    <option value="D" ${item.nilai === 'D' ? 'selected' : ''}>D (1.0)</option>
                    <option value="E" ${item.nilai === 'E' ? 'selected' : ''}>E (0.0)</option>
                </select>
            </td>
            <td><button type="button" class="btn-danger btn-hapus" data-index="${index}">Hapus</button></td>
        `;
        tbody.appendChild(tr);
    });
}

export function updateRingkasanHasil(totalSKS, ipk) {
    const elSKS = document.getElementById('total-sks');
    const elIPK = document.getElementById('ipk-val');
    if (elSKS) elSKS.textContent = totalSKS;
    if (elIPK) elIPK.textContent = ipk;
}