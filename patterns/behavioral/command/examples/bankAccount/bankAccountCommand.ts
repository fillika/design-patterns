import BankAccount from "./account/bankAccountInteface";
import Actions from "./actions";

class BankAccountCommand {
  private account: BankAccount;
  private action: Actions;
  private amount: number;
  private succeeded: boolean;

  constructor(account: BankAccount, action: Actions, amount: number) {
    this.account = account;
    this.action = action;
    this.amount = amount;
    this.succeeded = false;
  }

  call() {
    switch (this.action) {
      case Actions.Deposit:
        this.succeeded = this.account.deposit(this.amount);
        break;
      case Actions.Withdraw:
        this.succeeded = this.account.withdraw(this.amount);
        break;
    }
  }

  undo() {
    if (!this.succeeded) return;

    switch (this.action) {
      case Actions.Deposit:
        this.succeeded = this.account.withdraw(this.amount);
        break;
      case Actions.Withdraw:
        this.succeeded = this.account.deposit(this.amount);
        break;
    }
  }
}

export default BankAccountCommand;
