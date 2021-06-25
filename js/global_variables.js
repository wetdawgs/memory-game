/**
 * This file contains variables that are used across all scripts. They determine the level of 
 * difficulty of the levels of the game.
 */

// The number of moves the user has made so far.
var moves = 0;

// The level the user is currently in.
var level = 1;

// Whether the user has lost the game.
var failure = false;

// The amount of moves available to the user.
var max_moves = level*20;

// The list of all the emojis that can be displayed on the cards.
var emojis = [ "🐸", "🦑", "🦭", "🌒", "🍤", "🧊", "🌋", 
              "💸", "🧟", "🦠", "🪙", "🥽", "🦕", "☄️", "🥩", "🗿",];

/**
 * The emojis displayed on the cards on levels 1, 2 and 3 of the game. The number of emojis
 * grows bigger along with the level. 
 */           
var level1 = emojis.slice(0, 4);
var level2 = emojis.slice(4, 12);
var level3 = emojis;

// We concat the list of to-be-displayed emojis to itself so that there are two cards for each emoji.
var displayDeck = level1.concat(level1);