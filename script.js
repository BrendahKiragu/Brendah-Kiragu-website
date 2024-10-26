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
        }, 3000);
    }
}

function eraseText(textLength) {
    const fullText = `${constantText}${textArray[textIndex]}`;
    let index = textLength;
    
    const eraseInterval = setInterval(() => {
        changingText.style.width = `${constantText.length + --index}ch`;
        changingText.textContent = `${constantText}${fullText.slice(constantText.length, fullText.length - textLength + index)}`;

        if (index <= 0) {
            clearInterval(eraseInterval);
            textIndex = (textIndex + 1) % textArray.length;
            typeText();
        }
    }, 100);
}

// Start the typing effect
typeText();
