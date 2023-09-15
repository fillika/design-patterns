class Shape {
    constructor(renderer) {
        this.renderer = renderer;
    }

    draw() {
        throw new Error("Abstract method");
    }
}

module.exports = Shape;