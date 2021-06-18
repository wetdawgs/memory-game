var emojis = ["🤠", "✨", "🤯", "🎃", "👄", "👀", "🧟", "🧝", "🐸", "🦋", 
              "🦑", "🦭", "🍀", "🍄", "🌒", "🌈", "🍉", "🍤", "🧊", "🌋", 
              "💸", "🧨", "⚰️", "🦠", "🪙", "🥽", "🦕", "🐉", "☄️", "🥩", "🗿", "🗺"];

var emojis1 = emojis.slice(0, 8);
var emojis2 = emojis.slice(0, 18);
var tarjetasDisplay = emojis1.concat(emojis1);

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
    var descubiertas = document.querySelectorAll(".descubierta");

    if( descubiertas.length > 1){
        return;
    }

    this.classList.add("descubierta");

    var current = document.querySelectorAll(".descubierta");

    if(current.length < 2){
        return;
    }

    if(current[0].dataset.valor == current[1].dataset.valor){
        return;
    }else {
        current.forEach(function (elem) {
            setTimeout(function() {elem.classList.remove("descubierta")}, 1000);
        });
    }
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function (elem) {
    elem.addEventListener("click", descubrir);
})