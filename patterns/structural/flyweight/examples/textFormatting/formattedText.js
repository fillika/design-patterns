// This is a bad example of using memory
class FormattedText {
    constructor(plainText) {
        this.plainText = plainText;
        this.caps = new Array(plainText.length).map(c => false);
    }

    capitalizeRange(from, to) {
        for (let i = from; i < to; i++)
            this.caps[i] = true;
    }

    toString() {
        let buffer = [];
        for (let i = 0; i < this.plainText.length; i++) {
            let char = this.plainText[i];
            buffer.push(this.caps[i] ? char.toUpperCase() : char);
        }

        return buffer.join(``);
    }
}

module.exports = FormattedText;