const Subsystem1 = require("./subsystem1");
const Subsystem2 = require("./subsystem2");

// This class is Facade.
class System {
    constructor(subSys1 = new Subsystem1, subSys2 = new Subsystem2) {
        this.subsystem1 = subSys1;
        this.subsystem2 = subSys2;
    }

    run() {
        let result = `Facade initializes subsystems:\n`;
        result += this.subsystem1.operation1();
        result += this.subsystem2.operation1();
        result += `Facade orders subsystems to perform the action:\n`;
        result += this.subsystem1.operationN();
        result += this.subsystem2.operationZ();

        console.log(result);
        return result;
    }
}

module.exports = System;