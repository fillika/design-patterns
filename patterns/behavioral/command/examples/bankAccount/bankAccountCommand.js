const Actions = require("./actions");

class BankAccountCommand {
    constructor(account, action, amount) {
        this.account = account;
        this.action = action;
        this.amount = amount;
    }

    call() {
        switch (this.action) {
            case Actions.deposit:
                this.account.deposit(this.amount);
                break;
            case Actions.withdraw:
                this.account.withdraw(this.amount);
                break;
        }
    }
}

module.exports = BankAccountCommand;