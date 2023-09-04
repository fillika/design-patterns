class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    deepCopy() {
        return new Person(this.name, this.address.deepCopy());
    }

    toString() {
        return `${this.name} lives at ${this.address}`;
    }
}

module.exports = Person;