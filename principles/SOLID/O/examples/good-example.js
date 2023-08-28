// Open-Closed Principle
// Main idea of principle is
// OPEN for EXTENSION and CLOSE for modification

const { Color, Size } = require("../enums");
const FilterSpecification = require("../filterSpecification");
const ColorSpecification = require("../specification/colorSpecification");
const AndSpecification = require("../specification/andSpecification");
const SizeSpecification = require("../specification/sizeSpecification");
const products = require("../products");

filterGreenProducts();
filterProductsBySmallSizeAndRedColor();

function filterGreenProducts() {
    let fsp = new FilterSpecification;
    let greenColorSpec = new ColorSpecification(Color.green);
    console.log("Green products (new):");
    for (const product of fsp.filter(products, greenColorSpec)) {
        console.log(` * ${product.name} is ${product.color}`);
    }
}

function filterProductsBySmallSizeAndRedColor() {
    let fsp = new FilterSpecification;
    let redColorSpec = new ColorSpecification(Color.red);
    let smallSizeSpec = new SizeSpecification(Size.small);
    let andSpec = new AndSpecification(redColorSpec, smallSizeSpec);

    console.log("Red and small products (new):");
    for (const product of fsp.filter(products, andSpec)) {
        console.log(` * ${product.name} is ${product.color} and ${product.size} size`);
    }
}
