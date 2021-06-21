function iniciar(){
    movimientos = 0;

    reparteTarjetas();

    document.querySelector("#feedback").classList.remove("visible");


    document.querySelectorAll(".tarjeta").forEach(function (elem) {
        elem.addEventListener("click", descubrir);
    });

    timer(1);
}

document.querySelector("#reiniciar").addEventListener("click", 
function () {console.log("bich")});

iniciar();