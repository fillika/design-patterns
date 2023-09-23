// This example is simple.
// We just incapsulate logic in separate class
import Actions from "./actions";
import BankAccountImpl from "./account/bankAccount";
import BankAccountCommand from "./bankAccountCommand";

let ba = new BankAccountImpl(100);
let cmd = new BankAccountCommand(ba, Actions.Withdraw, 400);
cmd.call();
console.log(ba.toString());
cmd.undo();
console.log(ba.toString());
