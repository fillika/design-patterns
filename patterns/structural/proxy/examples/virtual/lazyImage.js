const Image = require("./image");

class LazyImage {
    constructor(url) {
        this.url = url;
        this.image = null;
    }

    draw() {
        if (!this.image)
            this.image = new Image(this.url);

        this.image.draw();
    }
}

module.exports = LazyImage;