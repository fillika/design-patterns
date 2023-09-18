const BetterFormatted = require("./betterFormatted");
const FormattedText = require("./formattedText");

const TEXT = `I was miles away`;

let fText = new FormattedText(TEXT);
fText.capitalizeRange(2, 5);
console.log(fText.toString());

let betterFormatted = new BetterFormatted(TEXT);
betterFormatted.capitalizeRange(6, 11);
console.log(betterFormatted.toString());