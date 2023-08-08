import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDate = document.getElementById("datetime-picker");
const btnStart = document.querySelector('button[data-start]');
const showDays = document.querySelector('span[data-days]');
const showHours = document.querySelector('span[data-hours]');
const showMinutes = document.querySelector('span[data-minutes]');
const showSeconds = document.querySelector('span[data-seconds]');

const timeLeft = function convertMs(ms) {
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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);    
      if (
          selectedDates[0] < new Date()
    ) {
    alert("Please choose a date in the future");
      } else if(
          selectedDates[0] >= new Date()
    ) {
        btnStart.removeAttribute('disabled');
        btnStart.setAttribute('enabled', true);
      };
    },
};

flatpickr("input[id=datetime-picker]", options);

btnStart.addEventListener("click", onBtn, options);

function onBtn(event) {

    const count = setInterval(() => {
        options.onClose(selectedDates[0]) -= options.minuteIncrement;
    }, 1000);
    
    showDays.textContent = timeLeft.days;
    showHours.textContent = timeLeft.hours;
    showMinutes.textContent = timeLeft.minutes;
    showSecondstextContent = timeLeft.seconds;
}

