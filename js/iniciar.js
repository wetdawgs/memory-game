document.querySelectorAll(".reiniciar").forEach(function (b) {
    b.addEventListener("click", reiniciar);
});

document.querySelector("#sig-nivel").addEventListener("click", subeNivel);

function iniciar(){
    movimientos = 0;
    clearCounter();
    clearTimer();
    reparteTarjetas();

    document.querySelector(".mesa").classList.remove("invisible");

    document.querySelector("#cleared").classList.remove("visible");
    document.querySelector("#outOfTime").classList.remove("visible");
    document.querySelector("#outOfMoves").classList.remove("visible");
    document.querySelector("#finished").classList.remove("visible");

    document.querySelectorAll(".tarjeta").forEach(function (elem) {
        elem.addEventListener("click", descubrir);
    });
    document.querySelector("#nivel").innerText = '0' + nivel;
    document.querySelector("#total-moves").innerText = max_moves;
    timer(nivel);
}

function reiniciar(){
    nivel = 1;
    max_moves = 20;
    tarjetasDisplay = level1.concat(level1);
    iniciar();
}

function subeNivel(){
    nivel++;
    var currentDeck = nivel == 2 ? level2 : level3;
    max_moves = nivel*30;
    tarjetasDisplay = currentDeck.concat(currentDeck);
    iniciar();
}

iniciar(1);