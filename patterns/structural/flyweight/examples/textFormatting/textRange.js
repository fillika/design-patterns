// This is out lightweight object
class TextRange {
    constructor(start, end, capitalize = false) {
        this.start = start;
        this.end = end;
        this.capitalize = capitalize;
    }

    covers(position) {
        return position >= this.start && position <= this.end;
    }
}

module.exports = TextRange;