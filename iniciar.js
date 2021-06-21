document.querySelector("#reiniciar").addEventListener("click", reiniciar);

document.querySelector("#sig-nivel").addEventListener("click", subeNivel);

function iniciar(){
    movimientos = 0;
    clearCounter();
    clearTimer();

    reparteTarjetas();

    document.querySelector("#feedback").classList.remove("visible");


    document.querySelectorAll(".tarjeta").forEach(function (elem) {
        elem.addEventListener("click", descubrir);
    });

    document.querySelector("#nivel").innerText = '0' + nivel;

    document.querySelector("#total-moves").innerText = max_moves;

    timer(nivel);
}

function reiniciar(){
    nivel = 1;
    iniciar();
}

iniciar(1);

function subeNivel(){
    nivel++;
    var currentDeck = nivel == 2 ? level2 : level3;
    max_moves = nivel*30;
    tarjetasDisplay = currentDeck.concat(currentDeck);
    iniciar();
}