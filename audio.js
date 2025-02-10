document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bgMusic");
    let playButton = document.getElementById("playMusic");

    if (!audio) {
        // Create audio element dynamically if not found
        audio = document.createElement("audio");
        audio.id = "bgMusic";
        audio.loop = true;
        audio.innerHTML = `<source src="Hasi.mp3" type="audio/mpeg">`;
        document.body.appendChild(audio);
    }

    // Restore playback time & state
    let savedTime = localStorage.getItem("musicTime");
    let isPlaying = localStorage.getItem("isMusicPlaying");

    if (savedTime) {
        audio.currentTime = parseFloat(savedTime); // Restore previous position
    }

    if (isPlaying === "true") {
        audio.play();
        playButton.innerText = "⏸ Pause Music";
    }

    // Play/Pause Button Functionality
    playButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            localStorage.setItem("isMusicPlaying", "true");
            playButton.innerText = "⏸ Pause Music";
        } else {
            audio.pause();
            localStorage.setItem("isMusicPlaying", "false");
            playButton.innerText = "🎵 Play Music";
        }
    });

    // Continuously save playback time to localStorage
    setInterval(() => {
        if (!audio.paused) {
            localStorage.setItem("musicTime", audio.currentTime);
        }
    }, 1000); // Save progress every second

    // Prevent resetting the song on page reload
    window.addEventListener("beforeunload", function () {
        localStorage.setItem("musicTime", audio.currentTime);
    });
});
