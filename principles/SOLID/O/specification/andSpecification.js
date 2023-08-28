class AndSpecification {
    constructor(...specs) {
        this.specs = specs;
    }

    isSatisfied(item) {
        return this.specs.every(s => s.isSatisfied(item));
    }
}

module.exports = AndSpecification;