// Fungsi untuk menampilkan bagian yang dipilih
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Tampilkan Beranda saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => showSection('home'));
