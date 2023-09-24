import { lex } from "./lex";
import parse from "./parse";

let input = "(13 + 4) -(12+1)";
let tokens = lex(input);

console.log(tokens);

let result = parse(tokens);
console.log(result.valueOf());