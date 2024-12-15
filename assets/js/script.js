// Mendapatkan elemen-elemen dari DOM
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Menambahkan event listener untuk tombol menu hamburger
mobileMenuButton.addEventListener('click', () => {
  // Toggle visibilitas menu mobile
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('block');
});
