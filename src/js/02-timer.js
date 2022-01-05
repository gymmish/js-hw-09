import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start'),
  days: document.querySelector('[data-deys]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

// refs = {
//   input: document.querySelector('#datetime-picker'),
//   btn: document.querySelector('[type="button"]'),
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// btn.disabled = true;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const renderTime = () => {
//       const time = selectedDates[0].getTime() - Date.now;

//       if (time > 0) {
//         btn.disabled = false;

//         const padNum = num => String(num).padStart(2, 0);
//         refs.days.textContent = padNum(convertMs(time).days);
//         refs.hours.textContent = padNum(convertMs(time).hours);
//         refs.minutes.textContent = padNum(convertMs(time).minutes);
//         refs.seconds.textContent = padNum(convertMs(time).seconds);
//       } else {
//         return 'Please choose a date in the future';
//       }
//     };
//   },
// };
