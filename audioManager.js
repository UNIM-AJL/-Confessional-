let bgAudio;
let isPlaying = false;

function setupAudio() {
    // Create the audio element
    bgAudio = new Audio('eerieMusic.mp3');
    bgAudio.loop = true;

    // Check if audio is already playing from another page
    if (localStorage.getItem('isPlaying') === 'true') {
        bgAudio.currentTime = parseFloat(localStorage.getItem('currentTime') || 0);
        bgAudio.play();
        isPlaying = true;
    }

    // Update the audio state on play/pause
    bgAudio.onplay = () => {
        localStorage.setItem('isPlaying', 'true');
        isPlaying = true;
    };

    bgAudio.onpause = () => {
        localStorage.setItem('isPlaying', 'false');
        localStorage.setItem('currentTime', bgAudio.currentTime);
        isPlaying = false;
    };

    // Save current time periodically
    setInterval(() => {
        if (isPlaying) {
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