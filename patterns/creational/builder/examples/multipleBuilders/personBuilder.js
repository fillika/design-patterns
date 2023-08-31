const Person = require("./person");
const PersonAddressBuilder = require("./personAddressBuilder");
const PersonJobBuilder = require("./personJobBuilder");

class PersonBuilder {
    constructor(person = new Person) {
        this.person = person;
    }

    get lives() {
        return new PersonAddressBuilder(this.person);
    }

    get works() {
        return new PersonJobBuilder(this.person);
    }

    build() {
        return this.person;
    }
}

module.exports = PersonBuilder;