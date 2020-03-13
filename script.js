const button = document.getElementById('button');
const vinylRecord = document.getElementById('vinylRecord');
const tonearm = document.getElementById('tonearm');
const audio = document.getElementById('song');
const music = document.querySelector('.music');
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
        });
        li.className = "active-track";
        audio.src = track.src;
        play();
    });
    return li;
});