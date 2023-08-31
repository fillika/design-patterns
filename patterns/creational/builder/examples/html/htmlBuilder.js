const Tag = require("./tag");

class HtmlBuilder {
    constructor(rootName) {
        this.rootName = rootName;
        this.root = new Tag(rootName);
    }

    addChild(name, text) {
        let child = new Tag(name, text);
        this.root.children.push(child);
        return this;
    }

    toString() {
        return this.root.toString();
    }

    build() {
        return this.root;
    }
}

module.exports = HtmlBuilder;