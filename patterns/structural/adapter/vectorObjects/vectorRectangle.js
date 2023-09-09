const Line = require("../shapes/line");
const Point = require("../shapes/point");
const VectorObject = require("./vectorObject");

class VectorRect extends VectorObject {
    constructor(x, y, width, height) {
        super();
        this.push(new Line(new Point(x, y), new Point(x + width, y)));
        this.push(new Line(new Point(x + width, y), new Point(x + width, y + height)));
        this.push(new Line(new Point(x, y), new Point(x, y + height)));
        this.push(new Line(new Point(x, y + height), new Point(x + width, y + height)));
    }
}

module.exports = VectorRect;