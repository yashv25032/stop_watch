let timedisplay = document.querySelector('.timerDisplay');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let mm = 00;
let ss = 00;
let ms = 00;

let timerid = null;

start.addEventListener('click', function(){
    if (timerid !== null){
        clearInterval(timerid);
        }

    timerid = setInterval(startTimer,10);
});

stop.addEventListener('click', function(){
    clearInterval(timerid);
});

reset.addEventListener('click',function(){
    clearInterval(timerid);
    timedisplay.innerHTML = `00 : 00 : 00`;
    mm = ss = ms = 00;
});


function startTimer(){
    ms++;
    if (ms == 100){
        ms= 0;
        ss++;
        if (ss == 60){
            ss = 0;
            mm++;
        }
    }

    let msstring = ms < 10 ? `0${ms}` : ms;
    let ssstring = ss < 10 ? `0${ss}` : ss;
    let mmstring = mm < 10 ? `0${mm}` : mm;

    timedisplay.innerHTML = `${mmstring} : ${ssstring} : ${msstring}`;


}
