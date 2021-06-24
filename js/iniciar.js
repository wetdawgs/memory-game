document.querySelectorAll(".restart").forEach(function (b) {
    b.addEventListener("click", restart);
});

document.querySelector("#next-lev").addEventListener("click", subeNivel);

function iniciar(){
    movimientos = 0;
    failure = false;
    clearCounter();
    clearTimer();
    reparteTarjetas();

    document.querySelector(".lay-out").classList.remove("invisible");

    document.querySelector("#cleared").classList.remove("visible");
    document.querySelector("#outOfTime").classList.remove("visible");
    document.querySelector("#outOfMoves").classList.remove("visible");
    document.querySelector("#finished").classList.remove("visible");
    document.querySelector("#header").classList.remove("invisible");
    document.querySelector("body").classList.remove("winner");

    document.querySelectorAll(".tarjeta").forEach(function (elem) {
        elem.addEventListener("click", descubrir);
    });
    document.querySelector("#lev").innerText = '0' + nivel;
    document.querySelector("#total-moves").innerText = max_moves;
    timer(nivel);
}

function restart(){
    nivel = 1;
    max_moves = 20;
    tarjetasDisplay = level1.concat(level1);
    iniciar();
}

function subeNivel(){
    nivel++;
    var currentDeck = nivel == 2 ? level2 : level3;
    max_moves = nivel*20;
    tarjetasDisplay = currentDeck.concat(currentDeck);
    iniciar();
}

iniciar(1);