import Notiflix from 'notiflix';

const form = document.querySelector(".form");
const submitBtn = document.querySelector("button[type='submit']");

const refs = {
userDelay: form.elements.delay.value,
userStep: form.elements.step.value,
userAmount: form.elements.amount.value,
}

form.addEventListener("submit", submitForm);

function submitForm(event) { 

    event.preventDefault();

  const { userDelay, userStep, userAmount } = refs;

  if (userDelay < 0 || userStep < 0 || userAmount < 0) {
    Notiflix.Notify.warning(`❌ Only positive numbers`);
  } else {
    for (let i = 0; i <= userAmount; i += 1) {
   const position = i + 1;
    const delays = userDelay + userStep * i;

    const promiseNew = createPromise(position, delays); 

    promiseNew.then((position, delays) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${userDelay}ms`
          );
        })
        .catch((position, delays) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${userDelay}ms`
          );
        });
     };

   };
};

function createPromise(position, delay) {
  const promise = new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
 if (shouldResolve) {
   res({ position, delay });
 } else {
   rej({ position, delay });
 }
    }, refs.userDelay)
  })
};

