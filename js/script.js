/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Fungsi untuk mengecek dan menyesuaikan state navbar berdasarkan lebar layar
function adjustNavbarState() {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active'); // Tutup menu di layar > 768px
        menuIcon.classList.remove('bx-x'); // Kembalikan ikon ke hamburger
    }
}

// Panggil saat halaman dimuat dan saat jendela di-resize
window.addEventListener('load', adjustNavbarState);
window.addEventListener('resize', adjustNavbarState);

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle ikon antara hamburger dan close
    navbar.classList.toggle('active'); // Toggle visibilitas navbar
};

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    /*========== sticky navbar ==========*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Hanya tutup navbar saat scroll jika di mode mobile (< 768px)
    if (window.innerWidth <= 768) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.addEventListener('click', () => {
    darkModeIcon.classList.toggle('bx-sun');
    darkModeIcon.classList.toggle('bx-moon');
    document.body.classList.toggle('dark-mode');
});

/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portofolio-box, .testimonial-wrapper, contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });