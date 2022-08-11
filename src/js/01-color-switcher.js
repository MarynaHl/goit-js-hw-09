const bodyEl = document.querySelector("body");
const buttonStart = document.querySelector("button[data-start]");
const buttonStop = document.querySelector("button[data-stop]");
let timerId = null;
let firstRun = true;

buttonStop.disabled = true;

buttonStart.addEventListener('click', runColor);
buttonStop.addEventListener('click', stopColor);

function runColor(){
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    timerId = setInterval(colorChange, 1000);
    //1 зміна кольору одразу після натискання кнопки
    if (firstRun){
        colorChange();
        firstRun = false;
    };
};

function stopColor(){
    buttonStart.disabled = false;
    buttonStop.disabled = true;
    clearInterval(timerId);
    firstRun = true;
};

//змінює колір фону для <body>
function colorChange(){
    bodyEl.style.backgroundColor = getRandomHexColor();
};

//генерує випадковий колір
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};