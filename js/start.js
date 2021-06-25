document.querySelectorAll(".restart").forEach(function (b) {
    b.addEventListener("click", restart);
});

document.querySelector("#next-lev").addEventListener("click", subeNivel);

function start(){
    moves = 0;
    failure = false;
    clearCounter();
    clearTimer();
    lay_out_deck();

    document.querySelector(".lay-out").classList.remove("invisible");

    document.querySelector("#cleared").classList.remove("visible");
    document.querySelector("#outOfTime").classList.remove("visible");
    document.querySelector("#outOfMoves").classList.remove("visible");
    document.querySelector("#finished").classList.remove("visible");
    document.querySelector("#header").classList.remove("invisible");
    document.querySelector("body").classList.remove("winner");

    document.querySelectorAll(".card").forEach(function (elem) {
        elem.addEventListener("click", flip);
    });

    document.querySelector("#lev").innerText = '0' + level;
    document.querySelector("#total-moves").innerText = max_moves;

    timer(level);
}

/**
 * Restarts the game from level 1. We set the variables of level, max_moves
 * and displayDeck to the values the would have in the first level.
 */
function restart(){
    level = 1;
    max_moves = 20;
    displayDeck = level1.concat(level1);
    start();
}

/**
 * Moves the player un level up by updating the level, max_moves and displayDeck
 * variables to their next values. 
 */
function subeNivel(){
    level++;
    var currentDeck = level == 2 ? level2 : level3;
    max_moves = level*20;
    displayDeck = currentDeck.concat(currentDeck);
    start();
}

/* Start the fisrt level when the page is first loaded or reloaded */
start(1);