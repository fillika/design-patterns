const Circle = require("./shapes/circle");
const RasterRenderer = require("./renderers/raster");
const VectorRenderer = require("./renderers/vector");

let rasterRenderer = new RasterRenderer;
let vectorRenderer = new VectorRenderer;
let c1 = new Circle(rasterRenderer, 10);
let c2 = new Circle(vectorRenderer, 5);

c1.draw();
c2.draw();