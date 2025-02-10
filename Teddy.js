const notes = [
    "Hey Madam, teri smile ne toh mera dil chura liya! 🐻✨",
    "tu meri zindagi ka pop-up ad hai, close karne ka mann nahi karta! 😅❤️",
    "Janamdin mubarak ho mere cute bug 🐞✨, tu meri life ka best feature hai jo kabhi crash nahi hota! 😘🎉",
    "Happy Birthday, mere code ka perfect syntax! 💻❤️ Tere bina toh meri life ek endless loop ban jaye! 🔄🎂",
    "Happy B'day, mere heart ka bug fix 🛠️💓! Tere bina toh feelings hi error 404 ho jati hai! 🎂🥳",
    "Oyeee, birthday baby! 🎈🎂 Tu meri zindagi ka premium subscription hai, jo lifetime valid hai! 😍✨",
    "Janamdin mubarak ho mere pyaare emoji 😍🎉, tu meri life ka wo GIF hai jo kabhi bore nahi karta! 🎊💖"
];

// Replace these URLs with actual GIF URLs
const gifs = [
    "gif1.gif",
    "gif2.gif",
    "gif3.gif",
    "gif4.gif",
    "gif5.gif"
];

let currentIndex = 0;

// Function to create falling teddies with a limit to avoid performance issues
function createTeddyRain() {
    if (document.querySelectorAll('.teddy-rain').length > 20) return; // Limit teddy count

    const teddy = document.createElement('div');
    teddy.innerHTML = '🧸';
    teddy.className = 'teddy-rain text-2xl absolute';
    teddy.style.left = Math.random() * 100 + 'vw';
    teddy.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(teddy);
    
    setTimeout(() => teddy.remove(), 5000);
}

// Initialize page content and animations
function initialize() {
    updateContent();
    createProgressDots();
    createDecorations();
    setInterval(createTeddyRain, 500);
}

// Function to update note, GIF, background, and progress dots
function updateContent() {
    updateNote();
    updateGIF();
    updateProgressDots();
    updateBackground();
}

// Animate and update the love note
function updateNote() {
    const noteText = document.getElementById('noteText');
    gsap.to(noteText, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
            noteText.textContent = notes[currentIndex];
            gsap.to(noteText, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "back.out"
            });
        }
    });
}

// Animate and update the displayed GIF
function updateGIF() {
    const gifImg = document.getElementById('gifDisplay');
    gsap.to(gifImg, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        onComplete: () => {
            gifImg.src = gifs[currentIndex];
            gsap.to(gifImg, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "back.out"
            });
        }
    });
}

// Update background color smoothly
function updateBackground() {
    const colors = [
        "linear-gradient(45deg, #FFE5F1, #FFB6C1, #FFC0CB, #FFE4E1, #FFE5F1)",
        "linear-gradient(45deg, #FFB6C1, #FFC0CB, #FFE4E1, #FFE5F1, #FFB6C1)",
        "linear-gradient(45deg, #FFC0CB, #FFE4E1, #FFE5F1, #FFB6C1, #FFC0CB)",
        "linear-gradient(45deg, #FFE4E1, #FFE5F1, #FFB6C1, #FFC0CB, #FFE4E1)",
        "linear-gradient(45deg, #FFE5F1, #FFB6C1, #FFC0CB, #FFE4E1, #FFE5F1)"
    ];
    document.body.style.background = colors[currentIndex];
}

// Create and update progress dots dynamically
function createProgressDots() {
    const container = document.getElementById('progressDots');
    container.innerHTML = ''; // Clear old dots before adding new ones
    for (let i = 0; i < notes.length; i++) {
        const dot = document.createElement('div');
        dot.className = i === currentIndex ? 'w-3 h-3 rounded-full bg-pink-500 beating' : 'w-3 h-3 rounded-full bg-pink-300';
        container.appendChild(dot);
    }
}

// Update progress dots to indicate current index
function updateProgressDots() {
    const dots = document.querySelectorAll('#progressDots div');
    dots.forEach((dot, index) => {
        dot.className = index === currentIndex ? 'w-3 h-3 rounded-full bg-pink-500 beating' : 'w-3 h-3 rounded-full bg-pink-300';
    });
}

// Create floating decorations with a limit to avoid clutter
function createDecorations() {
    const decorations = document.getElementById('decorations');
    decorations.innerHTML = ''; // Clear previous decorations
    const elements = ['✨', '💖', '🌸', '🎀', '🧸'];
    
    for (let i = 0; i < 20; i++) {
        const decoration = document.createElement('div');
        decoration.textContent = elements[Math.floor(Math.random() * elements.length)];
        decoration.className = 'absolute sparkling';
        decoration.style.left = `${Math.random() * 100}%`;
        decoration.style.top = `${Math.random() * 100}%`;
        decoration.style.fontSize = `${Math.random() * 20 + 10}px`;
        decoration.style.opacity = '0.6';
        decorations.appendChild(decoration);
    }
}

// Handle next button click
document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % notes.length;
    updateContent();
});

// Page transition effect on next page button click
document.getElementById('nextPageButton').addEventListener('click', () => {
    gsap.to('body', {
        opacity: 0,
        duration: 1,
        onComplete: () => window.location.href = 'nextPage.html'
    });
});

// Initialize the page
initialize();
