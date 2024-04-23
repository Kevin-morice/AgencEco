const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function nextSlide() {
  console.log("Clic sur next");
  if (currentSlide === totalSlides - 1) {
      currentSlide = 0; // Retour à la première image si nous sommes sur la dernière
  } else {
      currentSlide++; // Passage à la prochaine image
  }
  updateSlide();
}

function prevSlide() {
  console.log("Clic sur prev");
  if (currentSlide === 0) {
      currentSlide = totalSlides - 1; // Passage à la dernière image si nous sommes sur la première
  } else {
      currentSlide--; // Passage à l'image précédente
  }
  updateSlide();
}

function updateSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.transform = 'translateX(0)';
        } else {
            slide.style.transform = 'translateX(-100%)';
        }
    });
}

// Ajouter les écouteurs d'événements pour les boutons "Précédent" et "Suivant"
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);