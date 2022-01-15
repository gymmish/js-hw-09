import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const firstDel = document.querySelector('[name=delay]');
const stepDel = document.querySelector('[name=step]');
const amountDel = document.querySelector('[name=amount]');

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

const onSubmitIn = e => {
  e.preventDefault();

  let delay = Number(firstDel.value);
  let step = Number(stepDel.value);
  let amount = Number(amountDel.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
      });
    delay += step;
  }
};

form.addEventListener('submit', onSubmitIn);
