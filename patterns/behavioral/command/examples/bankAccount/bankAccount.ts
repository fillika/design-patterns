const OVERDRAFT_LIMIT = -500;

export interface IBankAccount {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  toString(): string;
}

export class BankAccount implements BankAccount {
  private balance: number;

  constructor(balance = 0) {
    this.balance = balance;
  }

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
