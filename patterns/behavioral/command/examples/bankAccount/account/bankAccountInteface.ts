export default interface BankAccount {
  deposit(amount: number): boolean;
  withdraw(amount: number): boolean;
}
