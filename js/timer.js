var stopwatch;

// The text that displays the amount of minutes left.
var minutesText;

// The text that displays the amount of seconds left of a minute.
var secondsText;

/**
 * Creates a timer that is displayed on the corner of the screen, so that the user knows
 * how long they have to clear a level.
 * @param {Integer} mins the amount of minutes the timer runs for.
 */
function timer (mins){
    minutes = mins;
    seconds = 0;
    minutesText = "00";
    secondsText = "00";

    /** 
     * It changes the values of the cronometer second by second. That is, it makes the clock
     * on the cornen¡r of the screen tick.
     */
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

    /**
     * Makes the clock start ticking, executing the function tick() every second.
     */
    stopwatch = setInterval(tick, 1000);
}

/**
 * Makes the clock stop ticking. The amount of minutes ans seconds left is preserved on
 * display on the screen when this function is called.
 */
function stopTimer(){
    clearInterval(stopwatch);
};

/**
 * Makes the clock go back to its default state 00:00.
 */
function clearTimer(){
    document.querySelector("#minutes").innerText = '0' + level;
    document.querySelector("#seconds").innerText = "00";
}

/**
 * When the time the user had available for the level i up, a text is displayed 
 * letting them know that they've run out of time and thus lost the game.
 * Their only choice at this point is start the game again from level 1.
 */
function outOfTime(){
    failure = true;
    document.querySelector(".lay-out").classList.add("invisible");
    setTimeout(function() {
        document.querySelector("#outOfTime").classList.add("visible");
    }, 1000);
}