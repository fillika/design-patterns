class ColorSpecification {
    constructor(color) {
        this.color = color;
    }

    isSatisfied(item) {
        return this.color === item.color;
    }
}

module.exports = ColorSpecification;