const slides = document.querySelectorAll('.carousel img');  // All the slides
const progressBar = document.querySelector('.progress-bar');  // The progress bar element
const totalSlides = slides.length;  // Total number of slides
let currentIndex = 0;  // To track the current active slide
let progress = 0;  // Progress bar width

// Function to update the carousel and progress bar
function updateCarousel() {
    // Move to the next slide
    currentIndex = (currentIndex + 1) % totalSlides;

    // Move the carousel to the correct slide (using CSS transform)
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update the progress bar width
    progress = (currentIndex + 1) * (100 / totalSlides);
    progressBar.style.width = `${progress}%`;
}

// Function to start the carousel
function startCarousel() {
    // Start the carousel with an interval
    setInterval(updateCarousel, 3000);  // Update every 3 seconds
}

// Start the carousel when the page loads
window.onload = startCarousel;
