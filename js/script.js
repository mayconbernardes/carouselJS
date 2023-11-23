var images = ["./assets/image1.jpg", "./assets/image2.jpg", "./assets/image3.jpg", "./assets/image4.jpg"];
var currentImageIndex = 0;

document.getElementById("carouselImage").src = images[currentImageIndex];

document.getElementById("previous").addEventListener("click", 
function() {
    currentImageIndex--;
    if(currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    document.getElementById("carouselImage").src = images[currentImageIndex];
});

document.getElementById("next").addEventListener("click",
 function() {
    currentImageIndex++;
    if(currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById("carouselImage").src = images[currentImageIndex];
});