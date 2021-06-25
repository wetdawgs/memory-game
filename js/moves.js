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

function clearCounter(){
    document.querySelector("#player-moves").innerText = "00";
}

function outOfMoves(){
    failure = true;
    stopTimer();
    document.querySelector("#lay-out").classList.add("invisible");
    setTimeout(function() {
        document.querySelector("#outOfMoves").classList.add("visible");
    }, 1000);
}