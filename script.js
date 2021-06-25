const secondHand = document.querySelector('.hands-seconds-div');
const minuteHand = document.querySelector('.hands-minutes-div');
const hourHand = document.querySelector('.hands-hours-div');
const mask = document.querySelector('.mask');
const hands = document.querySelectorAll('.hands');

///////////////////////////////////////////////////////////////////////
setInterval(startClock, 1000);

function startClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation-degree', rotationRatio * 360);
}

startClock();
