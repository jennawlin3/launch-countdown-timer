const $daySpan = document.querySelector(".day");
const $hourSpan = document.querySelector(".hour");
const $minuteSpan = document.querySelector(".minute");
const $secondSpan = document.querySelector(".second");
let days;
let hours;
let minutes;
let seconds;

const $cards = document.querySelectorAll(".card");

function countdown () {
setInterval(() => {
    let dateFuture = new Date(2024,11,24).getTime();
    let dateToday = new Date().getTime();

    let distance = dateFuture - dateToday;
    
    days = Math.floor(Number(distance) / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(days < 10) {
        $daySpan.textContent = "0" + days;
    } else {
        $daySpan.textContent = days;        
    }

    if(hours < 10) {
        $hourSpan.textContent = "0" + hours;
    } else {
        $hourSpan.textContent = hours;        
    }

    if(minutes < 10) {
        $minuteSpan.textContent = "0" + minutes;
    } else {
        $minuteSpan.textContent = minutes;        
    }

    if(seconds < 10) {
        $secondSpan.textContent = "0" + seconds;
    } else {
        $secondSpan.textContent = seconds;        
    }
    //$daySpan.textContent = 

    if(distance < 0) {
        clearInterval(countdown);
    }
}, 1000);
}  

document.addEventListener("DOMContentLoaded", countdown())