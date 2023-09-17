class Buffer extends Array {
    constructor(width = 30, height = 20) {
        super();
        this.width = width;
        this.height = height;
        this.alloc(this.width * this.height);
    }

    alloc(n) {
        // some logic
    }

    write(text, position = 0) {
        // some logic
    }
}

module.exports = Buffer;