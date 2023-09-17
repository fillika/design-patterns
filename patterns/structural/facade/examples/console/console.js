const Buffer = require("./buffer");
const Viewport = require("./viewport");

// This class is facade
// Combine complex logic in one place with limited functionality 
class Console {
    constructor() {
        this.buffer = new Buffer;
        this.currentViewport = new Viewport(this.buffer);
        this.buffers = [this.buffer];
        this.viewports = [this.currentViewport];
    }

    write(text) {
        this.currentViewport.append(text);
    }

    getCharAt(index) {
        return this.currentViewport.getCharAt(index);
    }
}

module.exports = Console;