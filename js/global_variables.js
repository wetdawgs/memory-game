var moves = 0;

var level = 1;

var failure = false;

var max_moves = level*20;

var emojis = [ "🐸", "🦑", "🦭", "🌒", "🍤", "🧊", "🌋", 
              "💸", "🧟", "🦠", "🪙", "🥽", "🦕", "☄️", "🥩", "🗿",];

var level1 = emojis.slice(0, 4);

var level2 = emojis.slice(4, 12);

var level3 = emojis;

var displayDeck = level1.concat(level1);