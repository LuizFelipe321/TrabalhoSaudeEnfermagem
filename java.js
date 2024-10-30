let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
    
    slides[currentSlide].classList.remove("active");
    
    currentSlide = (index + slides.length) % slides.length;
    
    slides[currentSlide].classList.add("active");
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

function highlight(element) {
    element.style.backgroundColor = "#009999";
    element.style.color = "white";
    element.style.transform = "scale(1.05)";
}

function unhighlight(element) {
    element.style.backgroundColor = "#b3e0ff";
    element.style.color = "black";
    element.style.transform = "scale(1)";
}

