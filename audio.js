document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bgMusic");
    let playButton = document.getElementById("playMusic");

    // Check if audio state exists in localStorage
    let isPlaying = localStorage.getItem("isMusicPlaying");

    if (!audio) {
        // If no audio tag exists, create one dynamically
        audio = document.createElement("audio");
        audio.id = "bgMusic";
        audio.loop = true;
        audio.innerHTML = `<source src="Hasi.mp3" type="audio/mpeg">`;
        document.body.appendChild(audio);
    }

    // Restore playback state
    if (isPlaying === "true") {
        audio.play();
        playButton.innerText = "⏸ Pause Music";
    }

    // Play/Pause toggle
    playButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            localStorage.setItem("isMusicPlaying", "true"); // Store play state
            playButton.innerText = "⏸ Pause Music";
        } else {
            audio.pause();
            localStorage.setItem("isMusicPlaying", "false"); // Store pause state
            playButton.innerText = "🎵 Play Music";
        }
    });

    // Keep audio running on page change
    window.addEventListener("beforeunload", function () {
        if (!audio.paused) {
            localStorage.setItem("isMusicPlaying", "true");
        }
    });
});
