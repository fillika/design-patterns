const Buffer = require("./buffer");

class Viewport {
    constructor(buffer = new Buffer) {
        this.buffer = buffer;
        this.offset = 0;
    }

    append(text, position) {
        this.buffer.write(text, position + this.offset);
    }

    getCharAt(index) {
        return this.buffer[this.offset + index];
    }
}

module.exports = Viewport;