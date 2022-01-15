const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function bgColors() {
  body.style.backgroundColor = getRandomHexColor();
}

let timerId = 0;

function startColor(e) {
  e.currentTarget.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(bgColors, 1000);
}

function stopColor(e) {
  e.currentTarget.disabled = true;
  startBtn.disabled = false;
  clearInterval(timerId);
}

startBtn.addEventListener('click', startColor);
stopBtn.addEventListener('click', stopColor);
