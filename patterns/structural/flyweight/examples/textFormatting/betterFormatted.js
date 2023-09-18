const TextRange = require("./textRange");

// This example isn't ideal, but it's better than previous
// because we don't go through all chars for checking booleans
// we have limited classes 'Range'.
class BetterFormatted {
    constructor(plainText) {
        this.plainText = plainText;
        this.formatting = [];
    }

    capitalizeRange(start, end) {
        let range = new TextRange(start, end, true);
        this.formatting.push(range);
        return range;
    }

    toString() {
        let buffer = [];

        for (let i = 0; i < this.plainText.length; i++) {
            let char = this.plainText[i];

            for (let range of this.formatting) {
                if (range.covers(i) && range.capitalize)
                    buffer.push(char.toUpperCase());
                else
                    buffer.push(char);
            }
        }

        return buffer.join('');
    }
}

module.exports = BetterFormatted;