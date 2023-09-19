class Image {
    constructor(url) {
        this.url = url;
        console.log(`We are loading image from ${this.url}`);
    }

    draw() {
        console.log(`Drawing image from ${this.url}`);
    }
}

module.exports = Image;