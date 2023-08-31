class Person {
    constructor() {
        this.streetAddress = "";
        this.postCode = "";
        this.city = "";

        this.companyName = "";
        this.position = "";
        this.annualIncome = 0;
    }

    toString() {
        return `Person lives at ${this.streetAddress}, ${this.city}, ${this.postCode}
and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome} per year.`
    }
}

module.exports = Person;