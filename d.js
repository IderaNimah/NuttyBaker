const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const circles = document.querySelectorAll(".circle");
let slideInterval;

let currentSlide = 0;

function goToSlide(slideIndex) {
  slides.style.transform = `translateX(-${slideIndex * 500}px)`;

  slideItems.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });

  circles.forEach((circle, index) => {
    if (index === slideIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}

circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    clearInterval(slideInterval); // Clear the interval when the user clicks on a circle
    currentSlide = index;
    goToSlide(currentSlide);
    slideInterval = setInterval(nextSlide, 5000); // Restart the interval after manual slide change
  });
});

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideItems.length;
  goToSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slideItems.length) % slideItems.length;
  goToSlide(currentSlide);
}

slideInterval = setInterval(nextSlide, 5000); 
