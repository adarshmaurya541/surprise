document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bgMusic");
    const playButton = document.getElementById("playMusic");

    // Check if music is already playing in another tab and continue if needed
    if (!bgMusic.paused) {
        playButton.innerText = "⏸ Pause Music";
    }

    playButton.addEventListener("click", function () {
        if (bgMusic.paused) {
            // Stop any other existing audio before playing new one
            document.querySelectorAll("audio").forEach((audio) => {
                audio.pause();
                audio.currentTime = 0; // Reset audio to start
            });

            bgMusic.play();
            playButton.innerText = "⏸ Pause Music";
        } else {
            bgMusic.pause();
            playButton.innerText = "🎵 Play Music";
        }
    });
});
