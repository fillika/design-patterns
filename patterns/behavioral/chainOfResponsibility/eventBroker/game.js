const Event = require("./event");

class Game {
    constructor() {
        this.queries = new Event;
    }

    // just utility method
    performQuery(sender, query) {
        this.queries.fire(sender, query);
    }
}

module.exports = Game;