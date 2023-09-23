// This example is simple.
// We just incapsulate logic in separate class
import Actions from "./actions";
import { BankAccount } from "./bankAccount";
import BankAccountCommand from "./bankAccountCommand";

let ba = new BankAccount(100);
let cmd = new BankAccountCommand(ba, Actions.Deposit, 100);
cmd.call();
console.log(ba.toString());