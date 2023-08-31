const PersonBuilder = require("./personBuilder");

class PersonJobBuilder {
    constructor(person) {
        this.person = person;
    }

    at(companyName) {
        this.person.companyName = companyName;
        return this;
    }

    asA(position) {
        this.person.position = position;
        return this;
    }

    earning(annualIncome) {
        this.person.annualIncome = annualIncome;
        return this;
    }

    build() {
        return new PersonBuilder(this.person);
    }
}

module.exports = PersonJobBuilder;