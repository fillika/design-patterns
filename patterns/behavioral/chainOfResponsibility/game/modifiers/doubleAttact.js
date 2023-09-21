const BaseModifier = require("./base");

class DoubleAttackModifier extends BaseModifier {
    constructor(creature) {
        super(creature);
    }

    handle() {
        console.log(`Doubling ${this.creature.name} attack!`);
        this.creature.attack *= 2;
        super.handle();
    }
}

module.exports = DoubleAttackModifier;