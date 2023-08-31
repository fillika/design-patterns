const PersonBuilder = require("./personBuilder");

class PersonAddressBuilder {
    constructor(person) {
        this.person = person;
    }

    at(streetAddress) {
        this.person.streetAddress = streetAddress;
        return this;
    }

    withPostCode(postCode) {
        this.person.postCode = postCode;
        return this;
    }

    in(city) {
        this.person.city = city;
        return this;
    }

    build() {
        return new PersonBuilder(this.person);
    }
}

module.exports = PersonAddressBuilder;