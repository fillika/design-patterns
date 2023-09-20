const BaseModifier = require("./base");

class IncreaseDefencekModifier extends BaseModifier {
    constructor(creature) {
        super(creature);
    }

    handle() {
        if (this.creature.attack <= 3) {
            console.log(`Increasing ${this.creature.name} defence!`);
            this.creature.defence += 5;
        }
        super.handle();
    }
}

module.exports = IncreaseDefencekModifier;