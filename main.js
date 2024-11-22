onload = () => {
    document.body.classList.remove("container");
};

function playsound(audioName) {
    let audio = new Audio(audioName);
    audio.play();
}
playsound("Sempurna.mp3");