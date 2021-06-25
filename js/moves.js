/**
 * It updates the counter on the corner of the screen every time the user flips two cards.
 * Both the variable 'moves' and the text displayed on the screen get updated.
 * @returns 
 */
function updateCounter() {
    moves++;
    var movesText = moves;
    var pending = document.querySelectorAll(".card:not(.found)").length;
    if(moves === max_moves && pending > 0){
        movesText = moves;
        document.querySelector("#player-moves").innerText = movesText;
        setTimeout(outOfMoves, 500);
        return;
    }else if(moves < 10){
        movesText = '0' + moves;
    }

    document.querySelector("#player-moves").innerText = movesText;
}

/**
 * Returns the counter of user moves back to 0.
 */
function clearCounter(){
    document.querySelector("#player-moves").innerText = "00";
}

/**
 * When the user has used up all the moves they had available, a text is displayed 
 * letting them know that they've run out of moves and thus lost the game.
 * Their only choice at this point is start the game again from level 1.
 */
function outOfMoves(){
    failure = true;
    stopTimer();
    document.querySelector("#lay-out").classList.add("invisible");
    setTimeout(function() {
        document.querySelector("#outOfMoves").classList.add("visible");
    }, 1000);
}