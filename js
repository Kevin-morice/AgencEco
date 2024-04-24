const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
}

function updateSlide() {
  slides.forEach((slide, index) => {
      if (index === currentSlide) {
          slide.style.transform = 'translateX(0)';
      } else if (index < currentSlide) {
          slide.style.transform = 'translateX(-100%)';
      } else {
          slide.style.transform = 'translateX(100%)';
      }
  });
}