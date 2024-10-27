const textArray = ["HTML", "CSS", "React", "Python", "Flask"];
let textIndex = 0;
const changingText = document.querySelector(".changing-text");
const constantText = "I Build Interactive Web Apps with ";

function typeText() {
  if (textIndex < textArray.length) {
    const text = textArray[textIndex];
    changingText.textContent = `${constantText}...${text}`;
    changingText.style.width = `${changingText.textContent.length}ch`;

    setTimeout(() => {
      eraseText(text.length);
    }, 2000);
  }
}

function eraseText(textLength) {
  const fullText = `${constantText}${textArray[textIndex]}`;
  let index = textLength;

  const eraseInterval = setInterval(() => {
    changingText.style.width = `${constantText.length + --index}ch`;
    changingText.textContent = `${constantText}${fullText.slice(
      constantText.length,
      fullText.length - textLength + index
    )}`;

    if (index <= 0) {
      clearInterval(eraseInterval);
      textIndex = (textIndex + 1) % textArray.length;
      typeText();
    }
  }, 100);
}

// Function to open Gmail compose window
function sendEmail() {
  // Build the Gmail compose URL
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=brendakiragu02@gmail.com&su=RE:INQUIRY&body=Hello,%0A%0AI'm interested in your services.`;

  // Open the Gmail compose window in a new tab
  window.open(gmailURL, "_blank");
}

document.getElementById("contactButton").addEventListener("click", sendEmail);

// Start the typing effect
typeText();
sendEmail();
