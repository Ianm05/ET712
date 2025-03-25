console.log("Welcome, little explorer! 🌟");

// Example 1: Scroll by button with fun animation
let btnscrollby = document.querySelector(".btnscrollby");
if (btnscrollby) {
    btnscrollby.addEventListener("click", function () {
        window.scrollBy({ left: 100, top: 0, behavior: "smooth" });

        // Add a fun bouncing effect
        btnscrollby.style.transform = "scale(1.1)";
        setTimeout(() => btnscrollby.style.transform = "scale(1)", 200);
        
        // Optional: Play a fun sound (requires an audio file)
        // let clickSound = new Audio("click.mp3");
        // clickSound.play();
    });
}

// Example 2: Gallery scrolling with a playful effect
let btnright = document.querySelector(".btnright");
let btnleft = document.querySelector(".btnleft");

function scrollgallery(pexels) {
    let gallerycontainer = document.querySelector(".gallerycontainer");
    if (gallerycontainer) {
        gallerycontainer.scrollBy({
            left: pexels,
            behavior: "smooth"
        });

        // Flash effect on scroll
        gallerycontainer.style.transition = "background 0.3s ease";
        gallerycontainer.style.background = "#ffeb3b"; // Bright yellow
        setTimeout(() => gallerycontainer.style.background = "", 300);
    }
}

if (btnright && btnleft) {
    btnright.addEventListener("click", function () {
        scrollgallery(600);
    });

    btnleft.addEventListener("click", function () {
        scrollgallery(-600);
    });
}

// Example 3: Show/Hide top container with a friendly message
let topcontainer = document.querySelector(".topcontainer");

if (topcontainer) {
    window.addEventListener("scroll", function () {
        let pxTop = window.scrollY;
        topcontainer.style.display = pxTop > 100 ? "block" : "none";

        // Change text to something fun when it appears
        if (pxTop > 100) {
            topcontainer.innerHTML = "<h2>Keep going, adventurer! 🚀</h2>";
        }
    });
}

// Add playful hover effects to all buttons
document.querySelectorAll("button").forEach(button => {
    button.style.transition = "all 0.3s ease-in-out";
    
    button.addEventListener("mouseover", function () {
        button.style.transform = "scale(1.2)";
        button.style.background = "#ff4081"; // Fun pink color
    });

    button.addEventListener("mouseout", function () {
        button.style.transform = "scale(1)";
        button.style.background = "";
    });
});
