
const Product = require("./product");
const { Color, Size } = require("./enums");

let redApple = new Product("R-Apple", Color.red, Size.small);
let greenApple = new Product("G-Apple", Color.green, Size.small);
let tree = new Product("Tree", Color.green, Size.medium);
let greenHouse = new Product("G-House", Color.green, Size.large);
let redHouse = new Product("R-House", Color.red, Size.large);

let products = [redApple, greenApple, tree, greenHouse, redHouse];

module.exports = products;