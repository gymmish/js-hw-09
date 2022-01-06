import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('[type="button"]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const randerTime = () => {
      const time = selectedDates[0].getTime() - Date.now();

      if (time > 0) {
        btn.disabled = false;
        const padNum = num => String(num).padStart(2, 0);

        days.textContent = padNum(convertMs(time).days);
        hours.textContent = padNum(convertMs(time).hours);
        minutes.textContent = padNum(convertMs(time).minutes);
        seconds.textContent = padNum(convertMs(time).seconds);
      } else {
        Notiflix.Notify.warning('Please choose a date in the future');
        clearInterval(intervalId);
      }
    };
    const intervalId = setInterval(randerTime, 1000);
  },
};

flatpickr(input, options);

const startClock = e => {
  e.preventDefault();
  const intervalId = setInterval(() => {
    const time = new Date(input.value).getTime() - Date.now();

    if (time <= 0) {
      clearInterval(intervalId);
    }
    const date = convertMs(time);
    console.log(date);
  }, 1000);
};

btn.addEventListener('click', startClock);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
