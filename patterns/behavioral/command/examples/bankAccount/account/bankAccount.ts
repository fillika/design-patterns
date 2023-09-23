import AbstracAccount from "./abstractAccount";

const OVERDRAFT_LIMIT = -500;

export default class BankAccountImpl extends AbstracAccount {
  deposit(amount: number) {
    this.balance += amount;
    console.log(`Deposited: ${amount}. Balance is: $${this.balance}`);
    return true;
  }

  withdraw(amount: number) {
    if (this.balance - amount >= OVERDRAFT_LIMIT) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. Balance is: $${this.balance}`);
      return true;
    }
    return false;
  }

  toString() {
    return `Balance: $${this.balance}`;
  }
}
