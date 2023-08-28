class SizeSpecification {
    constructor(size) {
        this.size = size;
    }

    isSatisfied(item) {
        return this.size === item.size;
    }
}

module.exports = SizeSpecification;