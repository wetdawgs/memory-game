/**
 * Voltea las tarjetas cuando son clickeadas. Solo se pueden voltear 2 tarjetas a la vez.
 */
function flip(){

    var flipped = document.querySelectorAll(".flipped:not(.found)");

    if(flipped.length > 1){
        return;
    }

    this.classList.add("flipped");

    var currentlySelected = document.querySelectorAll(".flipped:not(.found)");

    if(currentlySelected.length < 2){
        return;
    }

    compare(currentlySelected);
    updateCounter();

    var pending = document.querySelectorAll(".card:not(.found)");

    if(pending.length === 0){
        setTimeout(getMessage, 1500);
    }
}

function getMessage() {
    if(level < 3){
        levelCleared();
    }else{
        finishedGame();
    }
}

function levelCleared(){
    if(failure)
        return;
    stopTimer();
    document.querySelector("#cleared").classList.add("visible");
    document.querySelector("#lay-out").innerHTML = "";
}

function finishedGame() {
    if(failure)
        return;
    stopTimer();
    document.querySelector("#lay-out").innerHTML = "";
    document.querySelector("#finished").classList.add("visible");
    document.querySelector("#header").classList.add("invisible");
    document.querySelector("body").classList.add("winner");
}

/**
 * Compara el emoji de las dos tarjetas volteadas. Si son iguales, manda a llamar a la función
 * acierto(); en otro caso, manda a llamar a la función error().
 * @param {object[]} tarjetas una lista con las dos tarjetas que se quieren comparar.
 */
function compare (cards) {
    if(cards[0].dataset.value == cards[1].dataset.value){
        found(cards);
    }else {
        mistake(cards);
    }
}

/**
 * 
 * @param {object[]} cards 
 */
function found (cards) {
    cards.forEach(function (elem) {
        elem.classList.add("found");
    });
}

/**
 * 
 * @param {object[]} tarjetas 
 */
function mistake (cards) {
    cards.forEach(function (elem) {
        elem.classList.add("error");
    });

    setTimeout(function() {
        cards.forEach(function (elem) {
            elem.classList.remove("flipped");
            elem.classList.remove("error");
        });
    }, 1000);

}   