import Notiflix from 'notiflix';

const form = document.querySelector(".form");
const submitBtn = document.querySelector("button[type='submit']");

const refs = {
userDelay: form.elements.delay.value,
userStep: form.elements.step.value,
userAmount: form.elements.amount.value,
}

let delays = null;
let position = null;

let object = {
  position: position,
  delay: delays,
}

form.addEventListener("submit", submitForm);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const { position, delay } = object;
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, refs.userDelay);
});


function submitForm(event) { 

  event.preventDefault();

  const { userDelay, userStep, userAmount } = refs;

  if (userDelay < 0 || userStep < 0 || userAmount < 0) {
    Notiflix.Notify.warning(`❌ Only positive numbers`);
  } else {
    for (let i = 0; i <= userAmount; i += 1) {
   const position = i + 1;
   delays = userDelay + userStep * i;
   
      promise
        .then(({ position, delay }) => Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${userDelay}ms`
        ))
      .catch(({ position, delays }) =>
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${userDelay}ms`
          ))
     };
   };
};



