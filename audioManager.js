// ChatGPT was used to create this section of code that allowed the background music to play continuously across multiple pages

// audioManager.js

let bgAudio;

function setupAudio() {
    // Create the audio element
    bgAudio = new Audio('eerieMusic.mp3');  // Ensure this path is correct
    bgAudio.loop = true;

    // Restore audio state
    const isPlaying = localStorage.getItem('isPlaying') === 'true';
    const currentTime = parseFloat(localStorage.getItem('currentTime') || 0);

    bgAudio.currentTime = currentTime;

    if (isPlaying) {
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