function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnClose: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector("body"),
};

refs.btnStart.addEventListener("click", onStart);
refs.btnClose.addEventListener("click", onClose);

function onStart(event) {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
    
    timerId = setInterval(() => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
    }, 1000);
    
    if (event.target.quantity = 1) {
        
    }

}

function onClose(event) { 
clearInterval(timerId);
}
