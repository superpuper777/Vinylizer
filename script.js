const button = document.getElementById('button');
const vinylRecord = document.getElementById('vinylRecord');
const tonearm = document.getElementById('tonearm');
const audio = document.getElementById('song');


const play = () => {
    // let audioDuration = audio.duration + "s";
    // let currentTime = audio.currentTime + "s"
    tonearm.style.animation = "tonearm 50s linear infinite";
    vinylRecord.style.animation = "vinylRecord 2s linear infinite";
    audio.play();
    // console.log(audioDuration);
    // console.log(currentTime);
};

const pause = () => {
    tonearm.style.animationPlayState = "paused";
    audio.pause();
};

var isMusicPlay = false;
button.addEventListener("click", function () {
    if (isMusicPlay) {
        pause();
        isMusicPlay = false;
    } else {
        play();
        isMusicPlay = true;
    }
});

audio.addEventListener("ended", function () {
    vinylRecord.style.animationPlayState = "paused";
    tonearm.style.animationPlayState = "paused";
});