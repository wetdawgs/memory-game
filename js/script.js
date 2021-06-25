/**
 * It flips a card and reveals it contents when the user clicks on it.
 * Only two cards can be flipped at all given times.
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

/**
 * It displays a message to te user, depending on wheter they cleared the level or not.
 */
function getMessage() {
    if(level < 3){
        levelCleared();
    }else{
        finishedGame();
    }
}

/**
 * When all pairs haven been found, the user gets a message telling them they can move on
 * to the next level. 
 * 
 * When the user completes the level with one too many moves, the game still interprets this
 * as a victory and so it displays both the failure and success messages. To avoid this issue,
 * we first check that the user has nos lost the game. In this case, we don't display the
 * success message. 
 */
function levelCleared(){
    if(failure)
        return;
    stopTimer();
    document.querySelector("#cleared").classList.add("visible");
    document.querySelector("#lay-out").innerHTML = "";
}

/**
 * When the uses has cleared all three levels, a message is displayed congratulating them.
 * The player has the option to start the game again from level 1. 
 */
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
 * Compares the emojis in the two flipped cards. The found() function is called
 * if they contain the same emoj; otherwise, mistake() is called.
 * @param {object[]} cards the two cards that we want to compare.
 */
function compare (cards) {
    if(cards[0].dataset.value == cards[1].dataset.value){
        found(cards);
    }else {
        mistake(cards);
    }
}

/**
 * When a pair or cards is found, this function adds the class "found" to them to play a 
 * fade animation and make them dissapear from the screen.
 * @param {object[]} cards the two cards that form a pair.
 */
function found (cards) {
    cards.forEach(function (elem) {
        elem.classList.add("found");
    });
}

/**
 * When thw two carss flip do not form a pair, this function adds the class "error" 
 * to makes them flip back around.
 * @param {object[]} cards the two cards flipped that don't match.
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