document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.querySelector('.playing');
    const volumeControl = document.querySelector('.audio-set input[type="range"]');
    const progressControl = document.querySelector('.system-range input[type="range"]');
    const currentTimeDisplay = document.querySelector('.system-timer .system-time:first-of-type');
    const durationDisplay = document.querySelector('.system-timer .system-time:last-of-type');

    // Lecture/Pause
    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = 'pause';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'play_arrow';
        }
    });

    // Ajustement du volume
    volumeControl.addEventListener('input', () => {
        audioPlayer.volume = volumeControl.value / 100;
    });

    // Mise à jour de la barre de progression et du temps actuel
    audioPlayer.addEventListener('timeupdate', () => {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressControl.value = progress;

        // Mettre à jour l'affichage du temps actuel
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    });

    // Recherche dans la piste
    progressControl.addEventListener('input', () => {
        const time = (progressControl.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = time;
    });

    // Formatage du temps pour afficher les minutes et les secondes
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    audioPlayer.addEventListener('loadedmetadata', () => {
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    });
});
