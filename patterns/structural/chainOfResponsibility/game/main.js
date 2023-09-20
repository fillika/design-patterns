// This implementation is close to linked list.
// I also can create a modifier that doesn't call super.handle();
// It stops all chain from running

const Creature = require("./creature");
const BaseModifier = require("./modifiers/base");
const DoubleAttackModifier = require("./modifiers/doubleAttact");
const IncreaseDefencekModifier = require("./modifiers/increaseDefence");

let goblin = new Creature("Goblin", 2, 4);
console.log(goblin.toString());

let rootModifier = new BaseModifier(goblin);
rootModifier.add(new IncreaseDefencekModifier(goblin));
rootModifier.add(new DoubleAttackModifier(goblin));
rootModifier.handle();
console.log(goblin.toString());
