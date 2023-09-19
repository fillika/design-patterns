const Property = require("./property");

class Creature {
    constructor() {
        this._agility = new Property(10, "agility");
    }

    // Property proxy
    get agility() { return this._agility.value };
    set agility(newValue) { this._agility.value = newValue };
}

module.exports = Creature;