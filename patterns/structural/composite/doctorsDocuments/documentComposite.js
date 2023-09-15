const Document = require("./document");

class DocumentComposite {
    constructor(title) {
        this.items = [];

        if (title)
            this.items.push(new Document(title));
    }

    add(item) {
        this.items.push(item);
    }

    sign(signature) {
        this.items.forEach(doc => doc.sing(signature));
    }

    toString() {
        return this.items
            .map(doc => doc.toString())
            .join("\n");
    }
}

module.exports = DocumentComposite;