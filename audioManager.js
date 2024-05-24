// audioManager.js

let bgAudio;

function setupAudio() {
    // Create the audio element
    bgAudio = new Audio('eerieMusic.mp3');  // Ensure this path is correct
    bgAudio.loop = true;

    // Check if audio should be playing and restore the current time
    if (localStorage.getItem('isPlaying') === 'true') {
        bgAudio.currentTime = parseFloat(localStorage.getItem('currentTime') || 0);
        bgAudio.play();
    }

    // Update localStorage on play/pause
    bgAudio.onplay = () => {
        localStorage.setItem('isPlaying', 'true');
    };

    bgAudio.onpause = () => {
        localStorage.setItem('isPlaying', 'false');
        localStorage.setItem('currentTime', bgAudio.currentTime);
    };

    // Save current time periodically
    setInterval(() => {
        if (!bgAudio.paused) {
            localStorage.setItem('currentTime', bgAudio.currentTime);
        }
    }, 1000);
}

function toggleAudio() {
    if (bgAudio.paused) {
        bgAudio.play();
    } else {
        bgAudio.pause();
    }
}