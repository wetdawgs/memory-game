function aumentaContador() {
    movimientos++;
    var movesText = movimientos;
    if(movimientos >= max_moves){
        outOfMoves();
    }else if(movimientos < 10){
        movesText = '0' + movimientos;
    }

    document.querySelector("#player-moves").innerText = movesText;
}

function clearCounter(){
    document.querySelector("#player-moves").innerText = "00";
}

function outOfMoves(){
    console.log("bich");
}