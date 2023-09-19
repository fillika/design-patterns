const Percent = require("./percent");

let fivePercent = new Percent(5);

console.log(`Five percents of 50 is 2.5. It is ${(50 * fivePercent) === 2.5}.`);