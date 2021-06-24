function aumentaContador() {
    movimientos++;
    var movesText = movimientos;
    var pending = document.querySelectorAll(".tarjeta:not(.encontrada)").length;
    if(movimientos === max_moves && pending > 0){
        movesText = movimientos;
        document.querySelector("#player-moves").innerText = movesText;
        setTimeout(outOfMoves, 500);
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
    failure = true;
    stopTimer();
    document.querySelector("#lay-out").classList.add("invisible");
    setTimeout(function() {
        document.querySelector("#outOfMoves").classList.add("visible");
    }, 1000);
}