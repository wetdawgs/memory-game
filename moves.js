function aumentaContador(max) {
    movimientos++;
    var movesText = movimientos;
    if(movimientos >= max){
        movesText = "00";
    }else if(movimientos < 10){
        movesText = '0' + movimientos;
    }

    document.querySelector("#player-moves").innerText = movesText;
}