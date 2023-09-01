const readline = require("readline");
let rl = new readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const HotDrinkMachine = require("./hotDrinkMachine");

let drinkMachine = new HotDrinkMachine();

rl.question("Which drink and amount (example 'tea 150')?\n", answer => {
    let [drinkName, amount] = answer.split(" ");
    let drink = drinkMachine.makeDrink(drinkName, parseInt(amount));

    drink.consume();
    rl.close()
});