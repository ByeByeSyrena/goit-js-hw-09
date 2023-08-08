import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDate = document.getElementById("datetime-picker");
const btnStart = document.querySelector('button[data-start]');
const showDays = document.querySelector('span[data-days]');
const showHours = document.querySelector('span[data-hours]');
const showMinutes = document.querySelector('span[data-minutes]');
const showSeconds = document.querySelector('span[data-seconds]');

const convertMs = (ms) => {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

btnStart.setAttribute('disabled', true);

let userDate = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);   
      
      if (selectedDates[0] <= new Date()) {
          Notiflix.Notify.failure("Please choose a date in the future");
          return;
      };

      userDate = selectedDates[0];

    btnStart.removeAttribute('disabled');
    },
};

flatpickr("input[id=datetime-picker]", options);

btnStart.addEventListener("click", onBtn);

function onBtn(event) {

    timerId = setInterval(() => {

    const dif = userDate - new Date();
    if (dif <= 0) { clearInterval(timerId); return; }

const { days, hours, minutes, seconds } = convertMs(dif);
    showDays.textContent = days;
    showHours.textContent = hours;
    showMinutes.textContent = minutes;
    showSeconds.textContent = seconds;
        
    showDays.textContent = addLeadingZero(days);
    showHours.textContent = addLeadingZero(hours);
    showMinutes.textContent = addLeadingZero(minutes);
    showSeconds.textContent = addLeadingZero(seconds);
    }, 1000);
};


function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}
