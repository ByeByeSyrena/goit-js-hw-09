function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnClose: document.querySelector('button[data-stop]'),
    body: document.querySelector("body"),
};

let timerId = null;

refs.btnStart.setAttribute('enabled', true);

refs.btnStart.addEventListener("click", onStart);
refs.btnClose.addEventListener("click", onClose);

function onStart(event) {

    timerId = setInterval(() => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
    }, 1000);
    
    refs.btnStart.removeAttribute('enabled');
    refs.btnStart.setAttribute('disabled', true);
}

function onClose(event) { 
    clearInterval(timerId);
    
    refs.btnStart.removeAttribute('disabled');
    refs.btnStart.setAttribute('enabled', true);
}
