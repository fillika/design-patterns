const Address = require("./address");
const Person = require("./person");
const Serializer = require("./serializer");


let johnDoe = new Person("John", new Address("123 London Road", "London", "UK"));

{
    // This is a first approach how to create a copy
    // But there is a limitation because we have to implement
    // 'deepCopy' in every object. A bit of headache
    let jane = johnDoe.deepCopy();

    jane.name = "Jane";
    jane.address.streetAddress = "321 Angel Street";
    console.group(`First approach. deepCopy() method.`)
    console.log(johnDoe.toString());
    console.log(jane.toString());
    console.groupEnd();
}


{
    let serializer = new Serializer([Person, Address]);
    let jane = serializer.clone(johnDoe);

    jane.name = "Jane";
    jane.address.streetAddress = "321 Angel Street";
    console.group(`Second approach. Serializer.`)
    console.log(johnDoe.toString());
    console.log(jane.toString());
    console.groupEnd();
}