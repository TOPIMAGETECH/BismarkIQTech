

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Voice Input
document.getElementById("voiceInput").addEventListener("click", () => {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
        document.getElementById("message").value = event.results[0][0].transcript;
    };
    recognition.start();
});

// Character Count
const message = document.getElementById("message");
const charCount = document.getElementById("charCount");

message.addEventListener("input", () => {
    const remaining = 500 - message.value.length;
    charCount.textContent = `${remaining} characters left`;
});

// Modal Confirmation
const form = document.getElementById("contactForm");
const modal = document.getElementById("modal");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
});

document.getElementById("confirmYes").addEventListener("click", () => {
    alert("Form Submitted Successfully!");
    modal.classList.add("hidden");
    form.reset();
});

// Particles Background
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded');
});
  