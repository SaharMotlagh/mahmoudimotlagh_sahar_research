$(document).ready(function() {
    var music = document.getElementById("music");
    var play_music_button = document.getElementById("play-music-button");
    
    function playAudio() {
        if (music.paused) {
            music.play();
            play_music_button.innerHTML = "Pause";
            /*play-music-button.className = "";
            play-music-button.className = "pause";*/
        } else {
            music.pause();
            play_music_button.innerHTML = "Resume";
            /*play-music-button.className = "";
            play-music-button.className = "play";*/
        }
        music.addEventListener('ended',function() {
            play_music_button.innerHTML = "Play";
        });
    }
    play-music-button.addEventListener("click", playAudio);
    });
