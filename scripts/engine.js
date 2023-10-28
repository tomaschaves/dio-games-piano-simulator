const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");

let mappedKeys = []
let audio = new Audio("./tunes/a.wav");

const playTune = (key) => {
    audio.src = `./tunes/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=> clickedKey.classList.remove("active"), 150);
};

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);  
    key.addEventListener("click", () => playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (event) => {
    if (mappedKeys.includes(event.key)) {
        playTune(event.key);
    }
});

const handleVolume = ({target}) => {
    audio.volume = target.value;
}

volumeSlider.addEventListener("input", handleVolume);