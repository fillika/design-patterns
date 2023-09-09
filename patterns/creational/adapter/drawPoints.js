const LineToPointAdapter = require("./adapters/lineToPointAdapter");
const drawPoint = require("./api/drawPoint");

module.exports = function (vectorObjects) {
    for (let vo of vectorObjects) {
        for (let line of vo) {
            let adapter = new LineToPointAdapter(line);
            adapter.items.forEach(drawPoint);
            console.log("");
        }
    }
};