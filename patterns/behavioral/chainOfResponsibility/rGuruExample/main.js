// https://refactoring.guru/ru/design-patterns/chain-of-responsibility/typescript/example

const clientCode = require("./clientCode");
const DogHandler = require("./dogHandler");
const MonkeyHandler = require("./monkeyHandler");
const SquirrelHandler = require("./squirrelHandler");

/**
 * Другая часть клиентского кода создает саму цепочку.
 */
const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

/**
 * Клиент должен иметь возможность отправлять запрос любому обработчику, а не
 * только первому в цепочке.
 */
console.log('Chain: Monkey > Squirrel > Dog\n');
clientCode(monkey);
console.log('');

console.log('Subchain: Squirrel > Dog\n');
clientCode(squirrel);