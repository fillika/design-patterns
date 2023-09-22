class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}. Balance is: $${this.balance}`);
    }

    withdraw(amount) {
        if (this.balance - amount >= BankAccount.overdraftLimit) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. Balance is: $${tihs.balance}`);
        }
    }

    toString() {
        return `Balance: $${this.balance}`;
    }
}

BankAccount.overdraftLimit = -500;

module.exports = BankAccount;