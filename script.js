const queueBTN = document.querySelectorAll(".playSongBTN");
const playBTN = document.getElementById("play");
const pauseBTN = document.getElementById("pause");
const shuffleBTN = document.getElementById("shuffle");
const skipPrevBTN = document.getElementById("prev");
const skipNextBTN = document.getElementById("next");
const loopBTN = document.getElementById("repeat");
const audioPlayer = document.getElementById("audio");
// const audio = new Audio("music/KaliUchis/RedMooninVenus/I Wish you Roses.mp3");

//accents
// let mediaBar = document.getElementById("media-bar")
let progressBar = document.getElementById("progress-bar")
let progressbar = document.getElementById("progress")
// let actionBTN = document.querySelectorAll(".action-btn")
// let actionBTNBig = document.querySelectorAll(".action-btn-big")

let progressPreview = document.getElementById("progress-preview")
let progress = document.getElementById("progress-time");
let duration = document.getElementById("song-duration");
progress.textContent = "0:00"
duration.textContent = "0:00"

// let currentAlbumIndex = 0;
// let songState = audio.paused

// let seconds = 0;
// let minutes = 0;

// actionBTN.forEach(button => {
//     button.addEventListener("click", shuffleQueue)
//     button.addEventListener("click", returnSong)
//     button.addEventListener("click", playSong)
//     button.addEventListener("click", skipSong)
//     button.addEventListener("click", repeatSong)
// });

// startBTN.addEventListener("click", startSong)
// function startSong() {
//     let audio =  Audio(this)
//     // currentAlbumIndex = murzik
// }

window.addEventListener("load", removePreloader)

function removePreloader() {
    document.getElementById("preloader").style.display="none"
}

let imgAlbum = document.getElementById("album-image");
let songName = document.getElementById("song-title-link");
let artistName = document.getElementById("Artist-link");
let albumName = document.getElementById("Album-link");
queueBTN.forEach(button => {
    button.addEventListener("click", queueSong)
})
function queueSong() {
    const clickedButton = event.currentTarget
    audioPlayer.src = this.dataset.songurl

    const initialElement = document.documentElement.style
    initialElement.setProperty("--accent", this.dataset.color)
    initialElement.setProperty("--buttoncolor", this.dataset.buttoncolor)

    imgAlbum.src = this.querySelector(".song-choice").src
    songName.textContent = this.querySelector(".song-choice-name").querySelector(".song-choice-name-p").textContent
    artistName.textContent = this.dataset.artist
    albumName.textContent = this.dataset.album
    playSong()
    // mediaBar.style.borderTop = "2px solid " + this.dataset.color
    // progressbar.style.backgroundColor = this.dataset.color
    // for (let i = 0; i < actionBTN.length; i++) {
    //     actionBTN[i].style.color = this.dataset.buttoncolor
    // }
    // for (let i = 0; i < actionBTNBig.length; i++) {
    //     actionBTNBig[i].style.color = this.dataset.color
    // }


}

shuffleBTN.addEventListener("click", shuffleQueue)
function shuffleQueue() {
    alert("Albums are not playable... what are you trying to shuffle 😭😭😭😭 nah im kidding its only a future addition")
}

skipPrevBTN.addEventListener("click", returnSong)
function returnSong() {
    audioPlayer.currentTime = 0
}

playBTN.addEventListener("click", playSong);
pauseBTN.addEventListener("click", playSong);
function playSong() {
    if (audio.paused) {
        audio.play()
        pauseBTN.style.display = "block"
        playBTN.style.display = "none"
    } else {
        audio.pause()
        pauseBTN.style.display = 'none'
        playBTN.style.display = "block"
    }
}

skipNextBTN.addEventListener("click", skipSong)
function skipSong() {
    audioPlayer.currentTime = audioPlayer.duration
}

const loopOffBTN = document.getElementById("loopOff");
const loopOnBTN = document.getElementById("loopOn");
loopBTN.addEventListener("click", repeatSong)
function repeatSong() {
    audioPlayer.loop = !audioPlayer.loop

    if (audioPlayer.loop) {
        loopOnBTN.style.display = "block"
        loopOffBTN.style.display = "none"
    } else {
        loopOnBTN.style.display = "none"
        loopOffBTN.style.display = "block"
    }
    // repeatStage = 0;
    // audio.loop = false;
    // if (repeatStage == 0) {
    //     repeatStage = 1;
    //     audio.loop = true
    // } else if (repeatStage == 1) {
    //     repeatStage = 2;
    //     audio.loop = false;
    //     // if murzik
}

const volumeBTN = document.getElementById("mute");
const volumeOnBTN = document.getElementById("volumeON");
const volumeOffBTN = document.getElementById("volumeOFF");
volumeBTN.addEventListener("click", muteAudio)
function muteAudio() {
    audioPlayer.muted = !audioPlayer.muted

    if (audioPlayer.muted) {
        volumeOnBTN.style.display = "none"
        volumeOffBTN.style.display = "block"
    } else {
        volumeOnBTN.style.display = "block"
        volumeOffBTN.style.display = "none"
    }
}

audioPlayer.addEventListener('timeupdate', () => {
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressbar.style.width = percent + "%";
    progress.textContent = formatTime(audioPlayer.currentTime)
})

audioPlayer.addEventListener('loadedmetadata', () => {
    duration.textContent = formatTime(audioPlayer.duration)
})

function formatTime(time) {
    let mins = Math.floor(time / 60);
    let secs = Math.floor(time % 60);
    return mins + ":" + String(secs).padStart(2, "0")
}

progressBar.addEventListener("mousemove", (event) => {
    const rect = progressBar.getBoundingClientRect();
    const preview = event.clientX - rect.left

    let previewPercent = (preview / rect.width) * 100
    progressPreview.style.width = previewPercent + "%"
})

progressBar.addEventListener("click", () => {
    alert("replay: press play to hear it again")
})

audioPlayer.addEventListener("ended", endedSong)
function endedSong() {
    playBTN.style.display = "block"
    pauseBTN.style.display = "none"
    audioPlayer.currentTime = 0
}