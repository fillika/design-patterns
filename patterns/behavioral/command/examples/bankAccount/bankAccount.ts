const OVERDRAFT_LIMIT = -500;

export interface BankAccount {
  deposit(amount: number): void;
  withdraw(amount: number): void;
}

abstract class Account {
  protected balance: number;

  constructor(balance = 0) {
    this.balance = balance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
  abstract toString(): string;
}

export class BankAccountImpl extends Account {
  deposit(amount: number) {
    this.balance += amount;
    console.log(`Deposited: ${amount}. Balance is: $${this.balance}`);
  }

  withdraw(amount: number) {
    if (this.balance - amount >= OVERDRAFT_LIMIT) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. Balance is: $${this.balance}`);
    }
  }

  toString() {
    return `Balance: $${this.balance}`;
  }
}
