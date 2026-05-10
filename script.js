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
const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 5000, // Berpindah setiap 5 detik
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Tips: Berhenti slide otomatis jika user sedang memutar video
// (Opsional: Butuh YouTube API untuk deteksi otomatis yang lebih kompleks)