var emojis = ["🤠", "✨", "🤯", "🎃", "👄", "👀", "🧟", "🧝", "🐸", "🦋", 
              "🦑", "🦭", "🍀", "🍄", "🌒", "🌈", "🍉", "🍤", "🧊", "🌋", 
              "💸", "🧨", "⚰️", "🦠", "🪙", "🥽", "🦕", "🐉", "☄️", "🥩", "🗿", "🗺"];

var emojis1 = emojis.slice(0, 8);
var emojis2 = emojis.slice(0, 18);
var tarjetasDisplay = emojis1;

function reparteTarjetas () {

    var mesa = document.querySelector(".mesa");
    
    mesa.innerHTML = "";

    var tarjetasBarajadas = barajaTarjetas();

    tarjetasBarajadas.forEach(function(elem) {
        
        var tarejta = document.createElement("div");

        tarejta.innerHTML = '<div class="tarjeta">'
                            + '<div class="contenido">'
                                + elem
                            + '</div>'
                            +'</div>';

        mesa.appendChild(tarejta);
    })

}

function barajaTarjetas () {
    var resultado;

    resultado = tarjetasDisplay.sort(function () {
        return 0.5 - Math.random();
    });

    return resultado;
}

function descubrir (){
    this.classList.add("descubierta");
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function (elem) {
    elem.addEventListener("click", descubrir);
})