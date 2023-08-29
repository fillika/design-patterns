class Shape {
    constructor(height, width) {
        if (this.constructor === Shape) {
            throw new Error("FYI: Instance of Abstract class cannot be instantiated");
        }

        this._height = height;
        this._width = width;
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    set width(width) {
        this._width = width;
    }

    set height(height) {
        this._height = height;
    }
}

class Square extends Shape {
    constructor(sizeSize) {
        super(sizeSize, sizeSize);
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    set width(width) {
        this._width = this._height = width;
    }

    set height(height) {
        this._height = this._width = height;
    }
}

testRect(new Rectangle(2, 3));
testSquare(new Square(4));

function testRect(rect) {
    console.log(`Expect ${rect.height * rect.width}, have ${rect.height * rect.width}`);
    rect.height = 8;
    console.log(`Expect ${rect.height * rect.width}, have ${rect.height * rect.width}`);
}

function testSquare(quare) {
    console.log(`Expect ${quare.height * quare.width}, have ${quare.height * quare.height}`);
    quare.height = 8;
    console.log(`Expect ${quare.height * quare.width}, have ${quare.height * quare.height}`);
}