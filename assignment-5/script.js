// Array of image URLs
const images = [
  "./assets/01.jpg",
  "./assets/02.jpg",
  "./assets/03.jpg",
  "./assets/04.jpg",
  "./assets/05.jpg",
];

let currentIndex = 0;

// Select the image element
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update image source
function updateImage() {
  sliderImage.src = images[currentIndex];
}

// Show the first image initially
updateImage();

// Event listeners for navigation
nextBtn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

prevBtn.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});
