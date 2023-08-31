const PersonBuilder = require("./personBuilder");

let personBuilder = new PersonBuilder;

let person = personBuilder
    .works.at("Microsoft").asA("Software engeineer").earning("90 000$").build()
    .lives.in("New York, USA").at("Manhattan").withPostCode("6000").build()
    .build();

console.log(person.toString());
