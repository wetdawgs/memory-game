function aumentaContador() {
    movimientos++;
    var movesText = movimientos;
    if(movimientos > max_moves){
        outOfMoves();
        return;
    }else if(movimientos < 10){
        movesText = '0' + movimientos;
    }

    document.querySelector("#player-moves").innerText = movesText;
}

function clearCounter(){
    document.querySelector("#player-moves").innerText = "00";
}

function outOfMoves(){
    stopTimer();
    document.querySelector(".mesa").classList.add("invisible");
    setTimeout(function() {
        document.querySelector("#outOfMoves").classList.add("visible");
    }, 1000);
}