const body = document.querySelector("body");
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const timerId = 0;

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  stopBtn.disabled = false;
  clearInterval(timerId);
});
