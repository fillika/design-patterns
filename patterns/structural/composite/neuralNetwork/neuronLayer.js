const Neuron = require("./neuron");
const Connectable = require("./connectable");
const aggregation = require("./utils/aggregation");

class NeuronLayer extends aggregation(Array, Connectable) {
    constructor(count) {
        super();
        while(count --> 0) {
            this.push(new Neuron)
        }
    }

    toString() {
        return `A layer with ${this.length} neurons`;
    }
}

module.exports = NeuronLayer;