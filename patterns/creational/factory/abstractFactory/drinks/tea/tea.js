const HotDrink = require("../hotDrink");

class Tea extends HotDrink {
    consume() {
        console.log(`This tea is nice with lemon!`);
    }
}

module.exports = Tea;