// BAD approach

class ProductFilter {
    filterByColor(products, color) {
        return products.filter(p => p.color === color);
    }

    filterBySize(products, size) {
        return products.filter(p => p.size === size);
    }
}

module.exports = ProductFilter;