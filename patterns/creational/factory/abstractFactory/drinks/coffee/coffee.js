const HotDrink = require("../hotDrink");

class Coffee extends HotDrink {
    consume() {
        console.log(`This coffee is delicious!`);
    }
}

module.exports = Coffee;