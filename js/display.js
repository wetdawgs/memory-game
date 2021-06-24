/**
 * Función que agrega la clase todos los emojis de nuestra baraja al elemento
 * con la clase "lay-out". Cada uno en su propio contenedor, al cual le damos las
 * clases "tarjeta" y "contenidos" para que se visualicen well-done en la página web.
 */
 function reparteTarjetas () {

    var mesa = document.querySelector(".lay-out");
    
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