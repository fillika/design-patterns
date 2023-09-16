const Decorator = require("./decorator");

class ConcreteDecoratorA extends Decorator {
    operation() {
        return `ConcreteDecoratorA(${super.operation()})`
    }
}

module.exports = ConcreteDecoratorA;