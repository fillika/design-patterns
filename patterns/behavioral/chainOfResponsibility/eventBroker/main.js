const Creature = require("./creature");
const Game = require("./game");
const DoubleAttackModifier = require("./modifiers/doubleAttack");

let game = new Game;
let strongGoblin = new Creature(game, "Strong Goblin", 2, 2);
console.log(strongGoblin.toString());

let doubleAttackModifier = new DoubleAttackModifier(game, strongGoblin);
console.log(strongGoblin.toString());

doubleAttackModifier.dispose(); // unsubscribe and delete last modifier
console.log(strongGoblin.toString());

// Conclusion
// This is a very complicated example from course.
// Main idea is using event broker (class Game) and this centralize component
// exposes some shared object with query and everyone can subscribe/unsubscribe.