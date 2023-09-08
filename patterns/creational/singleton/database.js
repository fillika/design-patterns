class Database {
    constructor(x) {
        let instance = this.constructor.instance;
        if (instance)
            return instance;

        this.x = x;

        this.constructor.instance = this;
    }
}

module.exports = Database;