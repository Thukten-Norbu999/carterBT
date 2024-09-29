let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  slides[currentIndex].classList.add("active");

  document.querySelector(".carousel-inner").style.transform = `translateX(-${
    currentIndex * 100
  }%)`;
}

// Optional: Auto-slide feature
setTimeout(() => {
  changeSlide(1);
}, 1000 * 60);

// Change slide every 3 seconds

function toggle() {
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");
  // Toggle the sidebar visibility on button click

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

function navToggle() {
  const toggleBtn = document.getElementById("toggleSidebar");
  const navContainer = document.getElementById("sidebar");

  toggleBtn.addEventListener("click", () => {
    navContainer.classList.toggle("active");
  });
}

toggle();


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);
