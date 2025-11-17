document.addEventListener('click', function(){
    openPopUp();
});
const popUpButton = document.querySelector('#dismissButton')
popUpButton.addEventListener('click', function() {
    playAudio()
});

let popUpElement = document.querySelector('#popUp');
if (popUpElement) {
    popUpElement.addEventListener('click', function(e){
        e.stopPropagation();
    });
}
function playAudio() {
const rand = Math.random();
        let audioSrc;
        if (rand <= 0.140) {audioSrc = 'ABC.mp3';}   
        else if (rand > 0.140 && rand <= 0.290) {audioSrc = 'Audio.mp3';}
        else if (rand > 0.290 && rand <= 0.440) {audioSrc = 'Audio2.mp3';}
        else if (rand > 0.440 && rand <= 0.590) {audioSrc = 'Audio3.mp3';}
        else if (rand > 0.590 && rand <= 0.740) {audioSrc = 'Audio4.mp3';}
        else if (rand > 0.740 && rand <= 0.890) {audioSrc = 'Audio5.mp3';}
        else {audioSrc = 'Audio6.pm3';}
        popUpAudio.src = audioSrc;
        document.getElementById('popUpAudio').play()
}
function openPopUp() {
    let popUp = document.querySelector('#popUp');
    let popUpImg = document.querySelector('#popUp img')

    if (Math.random() < 0.999) {

        const rand = Math.random();
        let imageSrc;
        if (rand <= 0.140) {imageSrc = 'ABC.jpg';}   
        else if (rand > 0.140 && rand <= 0.290) {imageSrc = 'Ad1.png';}
        else if (rand > 0.290 && rand <= 0.440) {imageSrc = 'Ad2.png';}
        else if (rand > 0.440 && rand <= 0.590) {imageSrc = 'Ad3.png';}
        else if (rand > 0.590 && rand <= 0.740) {imageSrc = 'Ad4.png';}
        else if (rand > 0.740 && rand <= 0.890) {imageSrc = 'Ad5.png';}
        else {imageSrc = 'Ad6.png';}
        popUpImg.src = imageSrc;
        popUp.style.display = 'block';
    } else {
        popUp.style.display = 'none';
    }
}
function closePopUp() {
    let popUp = document.querySelector('#popUp');
    popUp.style.display = 'none';
    document.getElementById('popUpAudio').pause()
}