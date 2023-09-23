abstract class AbstracAccount {
  protected balance: number;

  constructor(balance = 0) {
    this.balance = balance;
  }

  abstract deposit(amount: number): boolean;
  abstract withdraw(amount: number): boolean;
  abstract toString(): string;
}

export default AbstracAccount;
