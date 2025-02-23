let images = ["./ARMA.JPG", "./ARMBB.JPG", "./ARMCC.JPG","./ARMC.JPG","./ARMD.JPG"]; // यहाँ अपनी इमेज लिस्ट डालें
let currentIndex = 0;

function showImage(index) {
    let imgElement = document.getElementById("slider-image");
    imgElement.src = images[index];
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}
