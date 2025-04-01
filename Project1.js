let currentIndex = 0;
const images = document.querySelectorAll(".galleryimg");
const totalImages = images.length;
const btnLeft = document.querySelector(".btnleft");
const btnRight = document.querySelector(".btnright");

function changeImage(direction) {
    images[currentIndex].classList.remove("active"); // Hide current image
    currentIndex = (currentIndex + direction + totalImages) % totalImages; // Cycle images
    images[currentIndex].classList.add("active"); // Show next image
}

// Click events for buttons
btnRight.addEventListener("click", () => changeImage(1));
btnLeft.addEventListener("click", () => changeImage(-1));

// Auto-slide every 3 seconds
setInterval(() => changeImage(1), 3000);

let topcontainer =  document.querySelector(".topcontainer")

window.addEventListener("scroll", function(){
    let pxTop = window.scrollY 
    console.log(pxTop)
    if(pxTop>100){
        topcontainer.style.display = "block"
    }
    else{
         topcontainer.style.display = "none"
    }
})
let backToTopButton = document.getElementById("backToTop");

// Show button when user scrolls down
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to top when clicked
backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

