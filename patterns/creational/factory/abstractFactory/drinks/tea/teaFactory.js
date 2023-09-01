const HotDrinkFactory = require("../hotDrinkFactory");
const Tea = require("./tea");

class TeaFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Put in tea bag, boil water, pour ${amount}ml`);
        return new Tea();
    }
}

module.exports = TeaFactory;