let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

function activateClock() {
    let realTime = new Date();
    let seconds = realTime.getSeconds();
    let secondsPosition = ((seconds / 60) * 360) + 90;
    second.style.transform = `rotate(${secondsPosition}deg)`;

    let minutes = realTime.getMinutes();
    let minutesPosition = ((minutes / 60) * 360) + 90;
    minute.style.transform = `rotate(${minutesPosition}deg)`;

    let hours = realTime.getHours();
    let hoursPosition = ((hours / 12) * 360) + 90;
    hour.style.transform = `rotate(${hoursPosition}deg)`;
};
setInterval(activateClock, 1000);
activateClock();

