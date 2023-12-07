var images = ["Submarine.jpg", "submarine second.jpg"]; // Add more image paths as needed
var currentIndex = 0;
var slideInterval = 3000; // Change this value to set the interval in milliseconds

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('mainImage').src = images[currentIndex];
}

function startSlideshow() {
    setInterval(changeImage, slideInterval);
}

// Start the slideshow when the page loads
window.onload = startSlideshow;
