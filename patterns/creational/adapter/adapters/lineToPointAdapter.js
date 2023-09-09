const Point = require("../shapes/point");
const hashCodeString = require("../utils/hashCodeString");

class LineToPointAdapter {
    constructor(line) {
        this.hash = hashCodeString(JSON.stringify(line));
        if (LineToPointAdapter.cache[this.hash])
            return;

        console.log(`${LineToPointAdapter.count++}: Generating point for line ${line.toString()} (no-caching)`);
        let left = Math.min(line.start.x, line.end.x);
        let right = Math.max(line.start.x, line.end.x);
        let top = Math.min(line.start.y, line.end.y);
        let bottom = Math.max(line.start.y, line.end.y);

        let points = [];
        if (right - left === 0) {
            for (let y = top; y <= bottom; ++y) {
                points.push(new Point(left, y));
            }
        } else if (line.end.y - line.start.y === 0) {
            for (let x = left; x <= right; ++x) {
                points.push(new Point(x, top));
            }
        }

        LineToPointAdapter.cache[this.hash] = points;
    }

    get items() {
        return LineToPointAdapter.cache[this.hash];
    }
}

LineToPointAdapter.count = 0;
LineToPointAdapter.cache = {};

module.exports = LineToPointAdapter;