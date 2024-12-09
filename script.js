function buka() {
    document.getElementById("info").style.display="block";
};
function tutup() {
    document.getElementById("info").style.display="none";
};
window.addEventListener('scroll', function() {
    window.scrollTo(0, window.scrollY);
});
function medsos() {
    window.scrollTo({
        top: 612
    });
};
function beranda() {
    window.scrollTo({
        top: 0
    });
};
function project() {
    window.scrollTo({
        top: 1044
    });
};
function scrollKiri() {
    const container = document.getElementById('daftar');
    container.scrollBy({
        top: 0,
        left: -306,
        behavior: 'smooth'
    });
};
function scrollKanan() {
    const container = document.getElementById('daftar');
    container.scrollBy({
        top: 0,
        left: 306,
        behavior: 'smooth'
    });
};
function full() {
    document.querySelector('.base').classList.toggle('fullscreen');
    var teks = document.getElementById("fls");
    var plchld = document.getElementById("plchdr");
    var btnprev = document.querySelector('.prev-btn');
    var btnnext = document.querySelector('.next-btn');
    var t = document.querySelector('.kepsion');
    if (teks.innerHTML === "fullscreen"){
        teks.innerHTML = "fullscreen_exit";
        plchld.innerHTML = "Exit Fullscreen";
        btnprev.classList.toggle('fls');
        btnnext.classList.toggle('fls');
        t.classList.toggle('f');
    }else{
        teks.innerHTML = "fullscreen";
        plchld.innerHTML = "Fullscreen";
        btnprev.classList.remove('fls');
        btnnext.classList.remove('fls');
        t.classList.remove('f');
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0;

    function showSlide(index) {
        if (slides.length === 0) return;

        // Sembunyikan semua slide
        slides.forEach(slide => {
            slide.classList.remove('aktif');
        });

        // Pastikan index dalam rentang
        currentSlide = (index + slides.length) % slides.length;

        // Tampilkan slide yang dipilih
        slides[currentSlide].classList.add('aktif');
    }

    showSlide(currentSlide);

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    let autoSlideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3800);

    const slideshowContainer = document.querySelector('.slideshow-container');

    slideshowContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    slideshowContainer.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 3800);
    });
});
console.info("This website made by a student named Damar and usually", 
    "called Ata, he made this website using his potato computer with a", 
    "poor network. He life in Bantul Regency, Special Region Of Yogyakarta", 
    "and now was 10th grade majoring in network and computer engineering", 
    "(TKJ)."
);
console.log("Wanna see more of what i made? Visit my TikTok and Instagram", 
    "@ata_254z"
);
console.warn("I can coding but don't ask me to break into school Wi-Fi,", 
    "i'm not Hacker >:("
);