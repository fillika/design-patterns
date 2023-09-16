// https://refactoring.guru/ru/design-patterns/decorator/typescript/example
const ConcreteComponent = require("./components/concrete");
const ConcreteDecoratorA = require("./decorators/concreteDecoratorA");
const ConcreteDecoratorB = require("./decorators/concreteDecoratorB");

function clineCode(component) {
    console.log(`RESULT: ${component.operation()}`);
    console.log(``);
}

let simple = new ConcreteComponent;
console.log(`I've got a simple component`);
clineCode(simple);

let decorator1 = new ConcreteDecoratorA(simple);
let decorator2 = new ConcreteDecoratorB(decorator1);
console.log(`Client: Now I've got a decorated component`);
clineCode(decorator2);