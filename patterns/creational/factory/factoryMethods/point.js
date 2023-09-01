CoordinateSystem = Object.freeze({
    cartesian: 0,
    polar: 1,
});

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static newCartesianPoint(x, y) {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta) {
        return new Point(
            rho * Math.cos(theta),
            rho * Math.sin(theta),
        )
    }
}


let cp = Point.newCartesianPoint(2, 3);
let plp = Point.newPolarPoint(2, 3);

console.log(cp, plp);
