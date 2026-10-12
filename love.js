function createFloatingHeart() {
    // Create a new div element for the heart
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    
    // Randomize the horizontal position across the screen width (vw)
    heart.style.left = Math.random() * 100 + "vw";
    
    // Randomize the animation duration so they float at different speeds (between 3s and 6s)
    const floatDuration = Math.random() * 3 + 3;
    heart.style.animationDuration = floatDuration + "s";
    
    // Make the hearts vary slightly in size
    const size = Math.random() * 0.5 + 0.5;
    heart.style.transform = `scale(${size}) rotate(-45deg)`;
    
    // Add the heart to the document body
    document.body.appendChild(heart);
    
    // Remove the heart from the HTML after it finishes floating to keep the page light
    setTimeout(() => {
        heart.remove();
    }, floatDuration * 1000);
}

// Generate a new floating heart every 300 milliseconds
setInterval(createFloatingHeart, 300);