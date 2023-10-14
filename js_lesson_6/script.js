const symPlay = "\u23F5";
const symPause = "\u23F8";
const symStop = "\u23F9";
const symFull = "\u26F6";
const symMute = "\u{1F507}";
const symUnmute = "\u{1F508}";
const symLoud = "\u{1F50A}";
const symQuiet = "\u{1F509}";


document.addEventListener("DOMContentLoaded", configClip);

document.addEventListener("DOMContentLoaded", configTrack);

function configClip() {

    window.clip = document.getElementById("videoClip");
    if (!window.clip) throw "videoClip element not found";
    const btnPlay = document.getElementById("btnPlay");
    if (!btnPlay) throw "btnPlay element not found";
    const btnStop = document.getElementById("btnStop");
    if (!btnStop) throw "btnStop element not found";
    const btnMute = document.getElementById("btnMute");
    if (!btnMute) throw "btnMute element not found";
    const btnLoud = document.getElementById("btnLoud");
    if (!btnLoud) throw "btnLoud element not found";
    const btnQuiet = document.getElementById("btnQuiet");
    if (!btnQuiet) throw "btnQuiet element not found";
    const btnFull = document.getElementById("btnFull");
    if (!btnFull) throw "btnFull element not found";
    const progress = document.querySelector("#clipControls progress");
    if (!progress) throw "clipControls progress element not found";

    window.track = document.getElementById("audioTrack");
    const btnPlayAudio = document.getElementById("btnPlayAudio");
    const btnStopAudio = document.getElementById("btnStopAudio");
    const btnMuteAudio = document.getElementById("btnMuteAudio");
    const btnLoudAudio = document.getElementById("btnLoudAudio");
    const btnQuietAudio = document.getElementById("btnQuietAudio");
    const progressAudio = document.querySelector("#trackControls progress");

    window.clip.controls = false;

    window.track.controls = false;

    progress.max = 100;
    btnPlay.value = symPlay;
    btnStop.value = symStop;
    btnMute.value = symMute;
    btnLoud.value = symLoud;
    btnQuiet.value = symQuiet;
    btnFull.value = symFull;

    progressAudio.max = 100;
    btnPlayAudio.value = symPlay;
    btnStopAudio.value = symStop;
    btnMuteAudio.value = symMute;
    btnLoudAudio.value = symLoud;
    btnQuietAudio.value = symQuiet;


    window.clip.addEventListener('timeupdate', () => {
        progress.value = window.clip.currentTime * 100 / window.clip.duration;
        if (progress.value == 100) {
            btnPlay.value = symPlay;
        }
    });

    window.track.addEventListener('timeupdate', () => {
        progressAudio.value = window.track.currentTime * 100 / window.track.duration;
        if (progressAudio.value === 100) {
            btnPlayAudio.value = symPlay;
        }
    });


    btnPlay.addEventListener('click', play);
    btnStop.addEventListener('click', stop);
    btnMute.addEventListener('click', mute);
    btnLoud.addEventListener('click', loud);
    btnQuiet.addEventListener('click', quiet);
    btnFull.addEventListener('click', full);


    btnPlayAudio.addEventListener('click', playAudio);
    btnStopAudio.addEventListener('click', stopAudio);
    btnMuteAudio.addEventListener('click', muteAudio);
    btnLoudAudio.addEventListener('click', loudAudio);
    btnQuietAudio.addEventListener('click', quietAudio);
}

function play(e) {
    if (window.clip.paused || window.clip.ended) {
        window.clip.play();
        e.target.value = symPause;
    } else {
        window.clip.pause();
        e.target.value = symPlay;
    }
}

function playAudio(e) {
    if (window.track.paused || window.track.ended) {
        window.track.play();
        e.target.value = symPause;
    }
    else {
        window.track.pause();
        e.target.value = symPlay;
    }
    if (!window.clip.paused) {
        window.clip.pause();
        document.getElementById("btnPlay").value = symPlay;
    }
}


function stopAudio() {
    window.track.pause();
    window.track.currentTime = 0;
    document.getElementById("btnPlayAudio").value = symPlay;
}


function mute(e) {
    if (window.track.muted) {
        window.track.muted = false;
        e.target.value = symMute;
    }
    else {
        window.track.muted = true;
        e.target.value = symUnmute;
    }
}

function muteAudio(e) {
    if (window.track.muted) {
        window.track.muted = false;
        e.target.value = symMute;
    } else {
        window.track.muted = true;
        e.target.value = symUnmute;
    }
}

function stop() {
    window.clip.pause();
    window.clip.currentTime = 0;
}
function mute(e) {
    if (window.clip.muted) {
        window.clip.muted = false;
        e.target.value = symMute;
    }
    else {
        window.clip.muted = true;
        e.target.value = symUnmute;
    }
}
function loudAudio() {
    if (window.track.volume <= 0.9) window.track.volume += 0.1;
}

function quietAudio() {
    if (window.track.volume >= 0.1) window.track.volume -= 0.1;
}

function loud() {
    if (window.clip.volume <= 0.9) window.clip.volume += 0.1;
}
function quiet() {
    if (window.clip.volume >= 0.1) window.clip.volume -= 0.1;
}
function full() {
    window.clip.requestFullscreen();
}

