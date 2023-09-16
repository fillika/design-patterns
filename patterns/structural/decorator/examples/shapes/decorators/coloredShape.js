const Shape = require("../shape");

class ColoredShape extends Shape {
    constructor(shape, color) {
        super();
        this.shape = shape;
        this.color = color;
    }

    toString() {
        return `${this.shape.toString()} has the color ${this.color}`;
    }
}

module.exports = ColoredShape;