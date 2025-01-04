<!-- JavaScript (script.js) -->
// JavaScript for interactive elements

// Welcome Popup
window.onload = function() {
    alert("Welcome to Couture Club! Explore our fun collection of jeans, t-shirts, and dresses!");
};

// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);

// Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        alert("Please fill out all fields!");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
