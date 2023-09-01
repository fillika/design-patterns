const CoffeeFactory = require("./drinks/coffee/coffeeFactory");
const TeaFactory = require("./drinks/tea/teaFactory");

const AvailableFrink = Object.freeze({
    coffee: CoffeeFactory,
    tea: TeaFactory,
});

module.exports = AvailableFrink;