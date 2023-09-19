class Property {
    constructor(value, name = "") {
        this._value = value;
        this._name = name;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (this._value !== newValue) {
            console.log(`We are assigning ${newValue} to ${this._name}`);
            this._value = newValue;
        }
    }
}

module.exports = Property;