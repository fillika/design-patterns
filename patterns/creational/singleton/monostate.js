class CEO {
    get name() { return CEO._name; }
    set name(value) { CEO._name = value; }

    get age() { return CEO._age; }
    set age(value) { CEO._age = value; }

    toString() {
        return `CEO's name is: ${this.name} and he/she is ${this.age} years old`;
    }
}

CEO._name = undefined;
CEO._age = undefined;

let ceo1 = new CEO();
ceo1.age = 25;
ceo1.name = "Adam";

let ceo2 = new CEO();
ceo1.age = 30;
ceo1.name = "Bron";

console.log(ceo1.toString());
console.log(ceo2.toString());