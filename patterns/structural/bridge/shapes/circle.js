const Shape = require("./shape");

class Circle extends Shape {
    constructor(renderer, radius) {
        super(renderer);
        this.radius = radius;
    }

    draw() {
        this.renderer.renderCircle(this.radius);
    }
}

module.exports = Circle;