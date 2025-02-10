document.addEventListener("DOMContentLoaded", () => {
    let audio = document.createElement("audio");
    audio.src = "Hasi.mp3"; // Ensure this file is in the correct location
    audio.loop = true; // Loop the song
    audio.volume = 0.5; // Adjust volume if needed
    audio.style.display = "none"; // Hide the element

    document.body.appendChild(audio);

    // Play music when the button is clicked
    document.getElementById("playMusic").addEventListener("click", () => {
        if (audio