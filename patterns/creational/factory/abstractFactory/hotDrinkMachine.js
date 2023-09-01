const AvailableFrink = require("./availableDrink");

class HotDrinkMachine {
    constructor() {
        this.factories = {};

        for (const drink in AvailableFrink) {
            this.factories[drink] = new AvailableFrink[drink];
        }
    }
    makeDrink(type, amount) {
        return this.factories[type].prepare(amount);
    }
}

module.exports = HotDrinkMachine;