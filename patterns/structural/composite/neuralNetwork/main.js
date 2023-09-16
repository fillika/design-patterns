const Neuron = require("./neuron");
const NeuronLayer = require("./neuronLayer");

let neuron1 = new Neuron;
let neuron2 = new Neuron;

let neuronLayer1 = new NeuronLayer(3);
let neuronLayer2 = new NeuronLayer(10);

neuron1.connectTo(neuron2);
neuron1.connectTo(neuronLayer2);
neuronLayer2.connectTo(neuron1);
neuronLayer1.connectTo(neuronLayer2);

console.log(neuron1.toString());
console.log(neuron2.toString());
console.log(neuronLayer1.toString());
console.log(neuronLayer2.toString());