const Car = require("./car");

class CarProxy {
    constructor(driver) {
        this._driver = driver;
        this._car = new Car;
    }

    get driver() { return this._driver };

    // Protection proxy
    // This example control access to particular resource
    drive() {
        if (this.driver.age >= 16)
            this._car.drive();
        else
            console.log(`Driver is too young`);
    }
}

module.exports = CarProxy;