/**
 * Función que agrega la clase todos los emojis de nuestra baraja al elemento
 * con la clase "lay-out". Cada uno en su propio contenedor, al cual le damos las
 * clases "tarjeta" y "contenidos" para que se visualicen well-done en la página web.
 */
 function lay_out_deck() {

    var layout = document.querySelector(".lay-out");
    
    layout.innerHTML = "";

    var shifted_deck = shift();

    shifted_deck.forEach(function(elem) {
        
        var card = document.createElement("div");

        card.innerHTML = '<div class="card" data-value=" ' + elem + '">'
                            + '<div class="content">'
                                + elem
                            + '</div>'
                            +'</div>';

        layout.appendChild(card);
    });
}

/**
 * Reordena los elementos de "tarjetasDisplay" de manera aleatoria, para que 
 * se muestren en diferente orden cada vez que se recarga la página.
 * @returns El arreglo "tarjetasDisplay" con los elementos en un orden aleatorio.
 */
function shift() {
    var result;

    result = displayDeck.sort(function () {
        return 0.5 - Math.random();
    });

    return result;
}