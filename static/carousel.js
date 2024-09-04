let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slides[currentIndex].classList.add('active');

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Optional: Auto-slide feature

changeSlide(1);
// Change slide every 3 seconds
