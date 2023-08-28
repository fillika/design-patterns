class FilterSpecification {
    filter(items, spec) {
        return items.filter(x => spec.isSatisfied(x));
    }
}

module.exports = FilterSpecification;