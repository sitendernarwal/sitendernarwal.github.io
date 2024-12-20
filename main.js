let image = document.getElementById("Sitender_Image");
let left = document.getElementsByClassName("left");
let right = document.getElementsByClassName("right");

image.addEventListener("mouseenter", function () {
  image.src = "./images/situ2.png";
  document.body.style.backgroundImage = "url('./images/bg3.jpg')";
});

image.addEventListener("mouseleave", function () {
  image.src = "./images/situ1.png";
  document.body.style.backgroundImage = "url('./images/bg1.jpg')";
});

const texts = [
  "Student in IIT Delhi at Department of Mathematics",
  "CyberSecurity Enthusiast",
];

let currentTextIndex = 0;
let currentCharIndex = 0;

function typeText() {
  const element = document.getElementById("dynamic-text");

  // Reset the text content and start typing again
  element.textContent = "";
  currentCharIndex = 0;

  function typeNextChar() {
    if (currentCharIndex < texts[currentTextIndex].length) {
      element.textContent += texts[currentTextIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeNextChar, 100); // Adjust typing speed here (100ms for each character)
    } else {
      // After finishing the current text, wait for 1 second, then switch to the next one
      setTimeout(() => {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        typeText();
      }, 1000);
    }
  }

  typeNextChar();
}

document.addEventListener("DOMContentLoaded", () => {
  const dynamicHeading = document.getElementById("dynamic-heading");
  const phrases = [
    "A Student at IIT Delhi 🧑‍🎓",
    "A Cybersecurity Enthusiast 🔐",
    "Passionate about Coding 💻",
    "Building the Future, One Line at a Time 🚀",
  ];

  let currentIndex = 0;

  function changeHeadingText() {
    dynamicHeading.textContent = phrases[currentIndex];
    dynamicHeading.style.opacity = 1; // Make the text visible
    currentIndex = (currentIndex + 1) % phrases.length; // Loop through the phrases
  }

  // Initial change and set the interval for text changes
  changeHeadingText();
  setInterval(changeHeadingText, 4000); // Change every 4 seconds
});

window.onload = typeText; // Start typing when the page loads
