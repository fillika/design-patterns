const Coffee = require("./coffee");
const HotDrinkFactory = require("../hotDrinkFactory");

class CoffeeFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Grind some beans, boil water, pour ${amount}ml`);
        return new Coffee();
    }
}

module.exports = CoffeeFactory;