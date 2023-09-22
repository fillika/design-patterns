// This example is simple.
// We just incapsulate logic in separate class

const Actions = require("./actions");
const BankAccount = require("./bankAccount");
const BankAccountCommand = require("./bankAccountCommand");

let ba = new BankAccount(100);
let cmd = new BankAccountCommand(ba, Actions.deposit, 100);
cmd.call();
console.log(ba.toString());