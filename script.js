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

function adjustTextHeight() {
    const container = document.getElementById('container-deskripsi');
    const textBase = document.getElementById('text-deskripsi');
    const btn = document.getElementById('btn-read-more');
    const leftImage = document.querySelector('.swiper');

    if (!leftImage || !textBase || !container) return;

    // Reset dulu agar bisa menghitung scrollHeight yang asli
    textBase.style.maxHeight = 'none';
    btn.classList.add('hidden');

    // Gunakan setTimeout agar browser sempat merender layout Swiper
    setTimeout(() => {
        const imageHeight = leftImage.offsetHeight;
        const titleElement = container.querySelector('h2');
        const badgeElement = container.querySelector('span.inline-block'); // Badge "Berdiri sejak"
        
        const offsetExtra = (titleElement?.offsetHeight || 0) + (badgeElement?.offsetHeight || 0) + 60;
        const availableHeight = imageHeight - offsetExtra;

        if (textBase.scrollHeight > availableHeight) {
            textBase.style.maxHeight = availableHeight + 'px';
            textBase.style.overflow = 'hidden';
            textBase.classList.add('line-clamp-[8]'); // Opsional: sesuaikan jumlah baris
            btn.classList.remove('hidden');
        }
    }, 100);
}

// Gunakan event yang lebih aman
window.addEventListener('DOMContentLoaded', adjustTextHeight);
window.addEventListener('load', adjustTextHeight);
window.addEventListener('resize', adjustTextHeight);

// Fungsi klik tombol
document.getElementById('btn-read-more').addEventListener('click', function() {
    const textBase = document.getElementById('text-deskripsi');
    if (this.innerText === "Baca Selengkapnya") {
        textBase.style.maxHeight = "none";
        textBase.classList.remove('line-clamp-[8]');
        this.innerText = "Tampilkan Lebih Sedikit";
    } else {
        adjustTextHeight();
        this.innerText = "Baca Selengkapnya";
    }
});
