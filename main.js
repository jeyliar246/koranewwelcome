const prompts = [
    "book a flight for me",
    "send item to @chris pickup page from #ellaskincare",
    "find 3 bed apartment in ikoyi",
    "whats the current btc rate",
    "whats current dollar rate"
];

let currentPromptIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typewriterElement = document.getElementById('typewriter');

function typeWriter() {
    const currentPrompt = prompts[currentPromptIndex];
    
    if (!isDeleting && currentCharIndex < currentPrompt.length) {
        // Typing
        typewriterElement.textContent = currentPrompt.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        setTimeout(typeWriter, 100);
    } else if (isDeleting && currentCharIndex > 0) {
        // Deleting
        typewriterElement.textContent = currentPrompt.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(typeWriter, 50);
    } else if (!isDeleting && currentCharIndex === currentPrompt.length) {
        // Finished typing, wait then start deleting
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, 2000);
    } else if (isDeleting && currentCharIndex === 0) {
        // Finished deleting, move to next prompt
        isDeleting = false;
        currentPromptIndex = (currentPromptIndex + 1) % prompts.length;
        setTimeout(typeWriter, 300);
    }
}

// Start the typewriter effect when page loads
window.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});

