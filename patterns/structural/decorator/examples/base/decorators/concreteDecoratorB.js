const Decorator = require("./decorator");

class ConcreteDecoratorB extends Decorator {
    operation() {
        return `ConcreteDecoratorB(${super.operation()})`
    }
}

module.exports = ConcreteDecoratorB;