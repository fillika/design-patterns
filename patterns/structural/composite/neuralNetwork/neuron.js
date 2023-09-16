const Connectable = require("./connectable");

class Neuron extends Connectable {
    constructor() {
        super();
        this.in = [];
        this.out = [];
    }

    toString() {
        return `A neuron with ${this.in.length} inputs and ${this.out.length} outputs.`;
    }

    [Symbol.iterator]() {
        let isReturned = 0;

        return {
            next: () => ({
                value: this,
                done: isReturned++,
            }),
        }
    }
}

module.exports = Neuron;