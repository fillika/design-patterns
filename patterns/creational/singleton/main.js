const Database = require("./database");

let db1 = new Database(2);
let db2 = new Database(3);

console.log(`db1: ${db1.x}`);
console.log(`db2: ${db2.x}`);
console.log(`isIdentical: ${db2 === db1}`);