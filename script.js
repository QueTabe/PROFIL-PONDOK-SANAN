AOS.init({
    duration: 800,
    once: true
});

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.querySelector('nav').classList.add('shadow-xl');
    } else {
        document.querySelector('nav').classList.remove('shadow-xl');
    }
});

// Close mobile menu when clicking link
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('hidden');
    });
});

console.log('%cWebsite Pondok Pesantren Al-Hikmah siap digunakan!', 'color: #10b981; font-size: 14px; font-weight: bold');

// Tambahkan di bagian bawah script.js
// Di dalam script.js
const swiper = new Swiper(".mySwiper", {
    loop: true,
    // Bagian autoplay dihapus agar tidak jalan sendiri
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Tambahkan navigasi panah jika ingin lebih mudah berpindah
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
