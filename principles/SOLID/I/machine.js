class Machine {
    constructor() {
        if (this.constructor === Machine) {
            throw new Error("Machine is abstract");
        }
    }

    fax(doc) { 
        throw new Error("Fax is abstract");
    }
    print(doc) { }
    scan(doc) { }
}

module.exports = Machine;