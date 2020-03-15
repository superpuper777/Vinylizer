const button = document.getElementById('button');
const vinylRecord = document.getElementById('vinylRecord');
let tonearm = document.getElementById('tonearm');
const audio = document.getElementById('song');
const music = document.querySelector('.music');
const span = document.querySelector('span');
const trackList = [{
        src: "/audio/Adventure Club - Save Me.mp3",
        name: "Adventure Club - Save Me"
    },
    {
        src: "/audio/AQUA - My Oh My.mp3",
        name: "AQUA - My Oh My"
    },
    {
        src: "/audio/SAINt JHN - Roses.mp3",
        name: "SAINt JHN - Roses"
    }
];

const play = () => {
    tonearm.style.animation = `tonearm ${audio.duration}s linear forwards`;
    vinylRecord.style.animation = "vinylRecord 2s linear infinite";
    audio.ontimeupdate = trackTime;
    audio.play();
};

const pause = () => {
    tonearm.style.animationPlayState = "paused";
    audio.pause();
};

var isMusicPlay = false;
button.addEventListener("click", function () {
    isMusicPlay ? pause() : play();
    isMusicPlay = !isMusicPlay;
});

audio.addEventListener("ended", function () {
    vinylRecord.style.animationPlayState = "paused";
    tonearm.style.animationPlayState = "paused";
});

const div = document.createElement('div');
div.className = "trackList";
music.prepend(div);

const ul = document.createElement('ul');
ul.className = "track-list";
div.appendChild(ul);

const list = trackList.map((track, index) => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = "/images/play.png";
    img.id = "play";
    li.className = "track";
    li.textContent = track.name;
    ul.appendChild(li);
    li.appendChild(img);

    li.addEventListener('click', function () {
        list.map(track => {
            track.classList.remove("active-track");
            trackIndex = index;
            console.log("change track");
        });
        li.className = "active-track";
        audio.src = track.src;
        if (button.checked) {
            play();
        }
        newTonearm = tonearm.cloneNode(true);
        tonearm.parentNode.replaceChild(newTonearm, tonearm);
        tonearm = newTonearm;
    });
    return li;
});

function trackTime() {
    const currentTime = audio.currentTime;
    var minutes = Math.floor((currentTime / 60)),
        seconds = (currentTime % 60).toFixed(2);
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    span.textContent = minutes + ":" + seconds;
}