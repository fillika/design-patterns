class Document {
    constructor(title) {
        this.title = title;
        this.signature = undefined;
    }

    sing(signature) {
        this.signature = signature;
    }

    toString() {
        return `${this.title}, signature: ${this.signature}`;
    }
}

module.exports = Document;