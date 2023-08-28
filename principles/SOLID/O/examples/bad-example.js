// Open-Closed Principle
// Main idea of principle is
// OPEN for EXTENSION and CLOSE for modification

const { Color } = require("../enums");
const ProductFilter = require("../product-filter");
const products = require("../products");

let pf = new ProductFilter;
console.log("Green products (old):");
for (const product of pf.filterByColor(products, Color.green)) {
    console.log(` * ${product.name} is ${product.color}`);
}