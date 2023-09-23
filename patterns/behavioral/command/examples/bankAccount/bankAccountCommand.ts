import { BankAccount } from "./bankAccount";
import Actions from "./actions";

class BankAccountCommand {
  private account: BankAccount;
  private action: Actions;
  private amount: number;

  constructor(account: BankAccount, action: Actions, amount: number) {
    this.account = account;
    this.action = action;
    this.amount = amount;
  }

  call() {
    switch (this.action) {
      case Actions.Deposit:
        this.account.deposit(this.amount);
        break;
      case Actions.Withdraw:
        this.account.withdraw(this.amount);
        break;
    }
  }
}

export default BankAccountCommand;
