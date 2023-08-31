const HtmlBuilder = require("./htmlBuilder");


let builder = new HtmlBuilder("ul");
builder
    .addChild("li", "Hello")
    .addChild("li", "World")
    .addChild("li", "!")
    .build();

console.log(builder.toString());
