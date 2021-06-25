/**
 * Wraps every emoji in the displayDeck list in a div element, and appends it as a child node
 * to the "lay-out" element. We add the "class" and "content" classes to the emoji container
 * to style it later.
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
 * Shifts the elements of the displayDeck list in a random order, so that every time the user
 * plays the game the cards are in different order.
 * @returns 
 */
function shift() {
    var result;

    result = displayDeck.sort(function () {
        return 0.5 - Math.random();
    });

    return result;
}