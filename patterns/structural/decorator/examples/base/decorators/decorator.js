class Decorator {
    constructor(component) {
        this.component = component;
    }

    operation() {
        return this.component.operation();
    }
}

module.exports = Decorator;