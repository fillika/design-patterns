const drawPoints = require("./drawPoints");
const VectorRect = require("./vectorObjects/vectorRectangle");

let vectorObjects = [
    new VectorRect(1, 1, 10, 10),
    new VectorRect(3, 3, 6, 6),
];

drawPoints(vectorObjects);
drawPoints(vectorObjects);