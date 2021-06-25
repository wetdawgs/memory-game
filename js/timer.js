var stopwatch;
var minutosTexto;
var segundosTexto;

function timer (mins){
    
    minutes = mins;
    seconds = 0;
    minutesText = "00";
    secondsText = "00";

    function tick() {
        seconds--;
        if(seconds  < 0){
            seconds = 59;
            minutes--;
        }

        if(minutes < 0){
            seconds = 0;
            minutes = 0;
            clearInterval(stopwatch);
            outOfTime();
        }

        secondsText = seconds;
        minutesText = minutes;

        if(seconds < 10){
            secondsText = '0' + seconds;
        }

        if(minutes < 10){
            minutesText = '0' + minutes;
        }

        document.querySelector("#minutes").innerText = minutesText;
        document.querySelector("#seconds").innerText = secondsText;
    };

    stopwatch = setInterval(tick, 1000);
}

function stopTimer(){
    clearInterval(stopwatch);
};

function clearTimer(){
    document.querySelector("#minutes").innerText = '0' + level;
    document.querySelector("#seconds").innerText = "00";
}

function outOfTime(){
    failure = true;
    document.querySelector(".lay-out").classList.add("invisible");
    setTimeout(function() {
        document.querySelector("#outOfTime").classList.add("visible");
    }, 1000);
}