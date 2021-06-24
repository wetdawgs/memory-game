var movimientos = 0;

var nivel = 1;

var failure = false;

var max_moves = nivel*20;

var emojis = [ "🐸", "🦑", "🦭", "🌒", "🍤", "🧊", "🌋", 
              "💸", "🧟", "🦠", "🪙", "🥽", "🦕", "☄️", "🥩", "🗿",];

var level1 = emojis.slice(0, 4);

var level2 = emojis.slice(4, 12);

var level3 = emojis;

var tarjetasDisplay = level1.concat(level1);