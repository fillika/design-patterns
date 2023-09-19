const CarProxy = require("./carProxy");
const Driver = require("./driver");

let car = new CarProxy(new Driver(17));
car.drive();