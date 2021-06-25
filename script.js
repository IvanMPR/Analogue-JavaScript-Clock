const secondHand = document.querySelector('.hands-seconds-div');
const minuteHand = document.querySelector('.hands-minutes-div');
const hourHand = document.querySelector('.hands-hours-div');
const mask = document.querySelector('.mask');
const hands = document.querySelectorAll('.hands');
const dateString = document.querySelector('.date');

///////////////////////////////////////////////////////////////////////
const parseMonthName = function (num) {
  return num === 0
    ? 'January'
    : num === 1
    ? 'February'
    : num === 2
    ? 'March'
    : num === 3
    ? 'April'
    : num === 4
    ? 'May'
    : num === 5
    ? 'June'
    : num === 6
    ? 'July'
    : num === 7
    ? 'August'
    : num === 8
    ? 'September'
    : num === 9
    ? 'October'
    : num === 10
    ? 'November'
    : 'December';
};

const parseDayName = function (num) {
  return num === 0
    ? 'Sunday'
    : num === 1
    ? 'Monday'
    : num === 2
    ? 'Tuesday'
    : num === 3
    ? 'Wednesday'
    : num === 4
    ? 'Thursday'
    : num === 5
    ? 'Friday'
    : 'Saturday';
};

const ordinalNumberSuffix = function (date) {
  return date === 1 || date === 21 || date === 31
    ? 'st'
    : date === 2 || date === 22
    ? 'nd'
    : date === 3 || date === 23
    ? 'rd'
    : 'th';
};
// ///////////////////////////////////////////////////////////////////////

function startClock() {
  const now = new Date();
  // ////////////////////////////////////
  const secondsRatio = now.getSeconds() / 60;
  const minutesRatio = (secondsRatio + now.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + now.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);

  // //////////////////////////////////////

  const dayOfWeek = now.getDay();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  dateString.textContent = `${parseDayName(
    dayOfWeek
  )}, ${date}${ordinalNumberSuffix(date)} of ${parseMonthName(month)}, ${year}`;
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation-degree', rotationRatio * 360);
}
setInterval(startClock, 1000);
startClock();
