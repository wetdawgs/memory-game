var emojis = ["🤠", "✨", "🤯", "🎃", "👄", "👀", "🧟", "🧝", "🐸", "🦋", 
              "🦑", "🦭", "🍀", "🍄", "🌒", "🌈", "🍉", "🍤", "🧊", "🌋", 
              "💸", "🧨", "⚰️", "🦠", "🪙", "🥽", "🦕", "🐉", "☄️", "🥩", "🗿", "🗺"];

var emojis1 = emojis.slice(0, 8);
var emojis2 = emojis.slice(0, 18);
var tarjetasDisplay = emojis1.concat(emojis1);

/**
 * Función que agrega la clase todos los emojis de nuestra baraja al elemento
 * con la clase "mesa". Cada uno en su propio contenedor, al cual le damos las
 * clases "tarjeta" y "contenidos" para que se visualicen bien en la página web.
 */
function reparteTarjetas () {

    var mesa = document.querySelector(".mesa");
    
    mesa.innerHTML = "";

    var tarjetasBarajadas = barajaTarjetas();

    tarjetasBarajadas.forEach(function(elem) {
        
        var tarejta = document.createElement("div");

        tarejta.innerHTML = '<div class="tarjeta" data-valor=" ' + elem + '">'
                            + '<div class="contenido">'
                                + elem
                            + '</div>'
                            +'</div>';

        mesa.appendChild(tarejta);
    });
}

/**
 * Reordena los elementos de "tarjetasDisplay" de manera aleatoria, para que 
 * se muestren en diferente orden cada vez que se recarga la página.
 * @returns El arreglo "tarjetasDisplay" con los elementos en un orden aleatorio.
 */
function barajaTarjetas () {
    var resultado;

    resultado = tarjetasDisplay.sort(function () {
        return 0.5 - Math.random();
    });

    return resultado;
}

/**
 * Voltea las tarjetas cuando son clickeadas. Solo se pueden voltear 2 tarjetas a la vez.
 */
function descubrir (){
    var descubiertas = document.querySelectorAll(".descubierta:not(.encontrada)");

    if( descubiertas.length > 1){
        return;
    }

    this.classList.add("descubierta");

    var currentlySelected = document.querySelectorAll(".descubierta:not(.encontrada)");

    if(currentlySelected.length < 2){
        return;
    }

    comparar(currentlySelected);
}

/**
 * Compara el emoji de las dos tarjetas volteadas. Si son iguales, manda a llamar a la función
 * acierto(); en otro caso, manda a llamar a la función error().
 * @param {object[]} tarjetas una lista con las dos tarjetas que se quieren comparar.
 */
function comparar (tarjetas) {
    if(tarjetas[0].dataset.valor == tarjetas[1].dataset.valor){
        acierto(tarjetas);
    }else {
        mistake(tarjetas);
    }
}

/**
 * 
 * @param {object[]} tarjetas 
 */
function acierto (tarjetas) {
    tarjetas.forEach(function (elem) {
        elem.classList.add("encontrada");
    });
}

/**
 * 
 * @param {object[]} tarjetas 
 */
function mistake (tarjetas) {
    tarjetas.forEach(function (elem) {
        elem.classList.add("error");
    });

    setTimeout(function() {
        tarjetas.forEach(function (elem) {
            elem.classList.remove("descubierta");
            elem.classList.remove("error");
        });
    }, 1000);

}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function (elem) {
    elem.addEventListener("click", descubrir);
})